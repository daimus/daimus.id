import {Html, Head, Main, NextScript} from 'next/document'
import Sidebar from "@/components/Sidebar";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Daimus Suudi</title>
            </Head>
            <body
                className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto text-gray-50 bg-gray-800">
            <Sidebar/>
            <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
                <Main/>
            </main>
            <NextScript/>
            </body>
        </Html>
    )
}
