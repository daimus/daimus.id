import {Metadata} from "next";
import {notFound} from "next/navigation";
import { sql } from "@vercel/postgres";
import {qrisConverter} from "@/lib/qris-converter";
import PayDialog from "@/app/order/[id]/pay-dialog";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {formatter} from "@/lib/formatter";

type OrderStatus = string;

interface StatusInfo {
    title: string;
    subtitle: string;
    description: string;
}

const statuses: Record<OrderStatus, StatusInfo> = {
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

export const metadata: Metadata = {
    title: 'Order | daimus.id'
}

export default async function Order ({params} : { params: Promise<{ id: string }> }){
    let order;
    let orderItems = [];

    try {
        // Get Order
        const rowQueryResultOrder = await sql`SELECT * from ORDERS where id=${(await params).id} LIMIT 1`;
        if (rowQueryResultOrder.rowCount !== 1){
            // Handle Not Found
            return notFound();
        }
        order = rowQueryResultOrder.rows[0];
        // Get Order Item
        const rowQueryResultOrderItem = await sql`SELECT * from ORDER_ITEMS where order_id=${(await params).id}`;
        orderItems = rowQueryResultOrderItem.rows;
    } catch (e) {
        console.error(e)
        return notFound();
    }

    const result = qrisConverter({
        qrisCode: process.env.NEXT_PUBLIC_QRIS_CODE || "",
        amount: parseInt(order.total),
        feeType: undefined,
        fee: 0
    });

    return (
        <>
            <div>
                <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-xl">
                        <h1 className="text-base font-medium text-indigo-600">{statuses[`${order.status}`].title}</h1>
                        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{statuses[`${order.status}`].subtitle}</p>
                        <p className="mt-2 text-base">{statuses[`${order.status}`].description}</p>
                    </div>

                    <div className="mt-10 border-t border-gray-200">
                        <h2 className="sr-only">Your order</h2>

                        <div>
                            <h3 className="sr-only">Your information</h3>

                            <h4 className="sr-only">Addresses</h4>
                            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
                                <div>
                                    <dt className="font-medium">Billing address</dt>
                                    <dd className="mt-2">
                                        <address className="not-italic">
                                            <span className="block">{order.billing_name}</span>
                                            <span className="block">{order.billing_address}</span>
                                        </address>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-medium">Shipping address</dt>
                                    <dd className="mt-2">
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
                                    <dt className="font-medium">Payment method</dt>
                                    <dd className="mt-2">
                                        <p>{order.payment_method}</p>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-medium">Shipping method</dt>
                                    <dd className="mt-2">
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
                                                Order Item <span
                                                className="text-sm">({orderItems.length} items)</span>
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
                                                                <h4 className="font-medium">
                                                                    {item.name}
                                                                </h4>
                                                                <p className="mt-2 text-sm">{item.description}</p>
                                                            </div>
                                                            <div className="mt-6 flex flex-1 items-end">
                                                                <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                                                                    <div className="flex">
                                                                        <dt className="font-medium">Quantity</dt>
                                                                        <dd className="ml-2">{item.quantity} {item.unit}</dd>
                                                                    </div>
                                                                    <div className="flex pl-4 sm:pl-6">
                                                                        <dt className="font-medium">Price</dt>
                                                                        <dd className="ml-2">{formatter.format(item.price)}</dd>
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
                                    <dt className="font-medium">Subtotal</dt>
                                    <dd>{formatter.format(order.subtotal)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="flex font-medium">
                                        Discount
                                    </dt>
                                    <dd>{formatter.format(order.discount)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-medium">VAT</dt>
                                    <dd>{formatter.format(order.vat)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-medium">Shipping</dt>
                                    <dd>{formatter.format(order.shipping_fee)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="font-medium">Total</dt>
                                    <dd>{formatter.format(order.total)}</dd>
                                </div>
                            </dl>
                            {
                                (order.status === 'UNPAID') && <PayDialog qrCode={result}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}