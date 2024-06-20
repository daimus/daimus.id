import { sql } from "@vercel/postgres";
import {Button} from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {notFound} from "next/navigation";
import Image from "next/image";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Metadata} from "next";

const statuses = {
    UNPAID : {
        title: "Payment Required",
        subtitle: "Complete Your Purchase",
        description: "Your order is pending payment. Please complete your payment to proceed with your order."
    },
    PAID : {
        title: "Payment Received",
        subtitle: "Order Confirmed",
        description: "Thank you for your payment. Your order is confirmed and will be processed shortly."
    },
    SHIPPING: {
        title: "On the Move",
        subtitle: "Your Order is on its Way",
        description: "Your order is being shipped and will reach you soon. You can track your order for more details."
    },
    DELIVERED: {
        title: "Delivered",
        subtitle: "Your Order has Arrived",
        description: "Your order has been successfully delivered. We hope you enjoy your purchase!"
    }
}

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 60
export const fetchCache = 'default-no-store'
export const preferredRegion = 'auto'
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
    title: 'Order | daimus.id',
    description: 'Shop with ease and confidence on our order page. Enjoy fast, secure checkout and excellent customer service. Discover a wide range of products tailored to your needs. Place your order now and experience quick delivery!',
}
export default async function DetailOrderPage({params} : { params: { id: string }
}){
    let order;
    let orderItems = [];

    try {
        // Get Order
        const rowQueryResultOrder = await sql`SELECT * from ORDERS where id=${params.id} LIMIT 1`;
        if (rowQueryResultOrder.rowCount !== 1){
            // Handle Not Found
            return notFound();
        }
        order = rowQueryResultOrder.rows[0];
        // Get Order Item
        const rowQueryResultOrderItem = await sql`SELECT * from ORDER_ITEMS where order_id=${params.id}`;
        orderItems = rowQueryResultOrderItem.rows;
    } catch (e) {
        return notFound();
    }

    let numberFormat = new Intl.NumberFormat('id', {
        style: 'currency',
        currency: 'IDR',
    });

    return (
        <>
            <div className="">
                <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-xl">
                        {/*// @ts-ignore*/}
                        <h1 className="text-base font-medium text-indigo-600">{statuses[`${order.status}`].title}</h1>
                        {/*// @ts-ignore*/}
                        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{statuses[`${order.status}`].subtitle}</p>
                        {/*// @ts-ignore*/}
                        <p className="mt-2 text-base text-gray-500">{statuses[`${order.status}`].description}</p>
                    </div>

                    <div className="mt-10 border-t border-gray-200">
                        <h2 className="sr-only">Your order</h2>

                        <div>
                            <h3 className="sr-only">Your information</h3>

                            <h4 className="sr-only">Addresses</h4>
                            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
                                <div>
                                    <dt className="font-medium text-gray-900">Billing address</dt>
                                    <dd className="mt-2 text-gray-700">
                                        <address className="not-italic">
                                            <span className="block">{order.billing_name}</span>
                                            <span className="block">{order.billing_address}</span>
                                        </address>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-medium text-gray-900">Shipping address</dt>
                                    <dd className="mt-2 text-gray-700">
                                        <address className="not-italic">
                                            <span className="block">{order.shipping_name}</span>
                                            <span className="block">{order.shipping_address}</span>
                                        </address>
                                    </dd>
                                </div>
                            </dl>

                            <h4 className="sr-only">Payment</h4>
                            <dl className="grid grid-cols-2 gap-x-6 pb-10 pt-1 text-sm">
                                <div>
                                    <dt className="font-medium text-gray-900">Payment method</dt>
                                    <dd className="mt-2 text-gray-700">
                                        <p>{order.payment_method}</p>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-medium text-gray-900">Shipping method</dt>
                                    <dd className="mt-2 text-gray-700">
                                        <p>{order.logistic}</p>
                                        <p>{order.shipping_eta}</p>
                                    </dd>
                                </div>
                            </dl>

                            <div className="border-t border-gray-200">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>
                                            <span>
                                                Order Item <span className="text-gray-400 text-sm">({orderItems.length} items)</span>
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div>
                                                {orderItems.map((item) => (
                                                    <div key={item.id} className="flex space-x-6 py-10">
                                                        <img
                                                            src={item.image_url}
                                                            alt={item.name}
                                                            className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
                                                        />
                                                        <div className="flex flex-auto flex-col">
                                                            <div>
                                                                <h4 className="font-medium text-gray-900">
                                                                    {item.name}
                                                                </h4>
                                                                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                                                            </div>
                                                            <div className="mt-6 flex flex-1 items-end">
                                                                <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                                                                    <div className="flex">
                                                                        <dt className="font-medium text-gray-900">Quantity</dt>
                                                                        <dd className="ml-2 text-gray-700">{item.quantity} {item.unit}</dd>
                                                                    </div>
                                                                    <div className="flex pl-4 sm:pl-6">
                                                                        <dt className="font-medium text-gray-900">Price</dt>
                                                                        <dd className="ml-2 text-gray-700">{numberFormat.format(item.price)}</dd>
                                                                    </div>
                                                                </dl>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <h3 className="sr-only">Summary</h3>

                            <dl className="space-y-6 pt-8 text-sm">
                                <div className="flex justify-between">
                                    <dt className="font-medium text-gray-900">Subtotal</dt>
                                    <dd className="text-gray-700">{numberFormat.format(order.subtotal)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="flex font-medium text-gray-900">
                                        Discount
                                    </dt>
                                    <dd className="text-gray-700">{numberFormat.format(order.discount)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-medium text-gray-900">VAT</dt>
                                    <dd className="text-gray-700">{numberFormat.format(order.vat)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-medium text-gray-900">Shipping</dt>
                                    <dd className="text-gray-700">{numberFormat.format(order.shipping_fee)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-medium text-gray-900">Total</dt>
                                    <dd className="text-gray-900">{numberFormat.format(order.total)}</dd>
                                </div>
                            </dl>
                            {
                                (order.status === 'UNPAID' && order?.qris_image) && <div className="mt-4">
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button className="w-full">Pay</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogDescription>
                                                    <Image
                                                        src={order.qris_image}
                                                        width={500} height={500} alt="qris"/>
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Close</AlertDialogCancel>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}