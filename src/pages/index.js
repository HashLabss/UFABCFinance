import Head from 'next/head'

import HeroSection from '@/components/hero'
import About from '@/components/about'
import Expandable from '@/components/expandable'
import Join from '@/components/join'

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="EventChain" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <title>EventChain | Home</title>
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between bg-[url(../../public/images/mainbackground.jpg)] bg-cover bg-fixed bg-bottom">
                <HeroSection />

                <section className="w-full pb-20 backdrop-blur-xl bg-gradient-to-b from-black/50 to-base">
                    <About />
                    <Expandable />
                    <Join />
                </section>
            </main>
        </>
    )
}
