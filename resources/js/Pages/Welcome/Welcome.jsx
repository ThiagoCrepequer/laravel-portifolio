import { Head, usePage } from '@inertiajs/react';
import { Inicial } from './partials/Inicial';
import { SobreMim } from './partials/SobreMim/SobreMim';
import { Empresa } from './partials/Empresa/Empresa';
import { Contatos } from './partials/Contatos';
import { Footer } from './partials/Footer';

export default function Welcome() {
    const {header} = usePage().props

    return (
        <>
            <Head>
                <title>{header.title}</title>
                
                <meta name="description" content={header.description} />
                <meta name="keywords" content={header.keywords} />
            </Head>

            <main className='bg-neutral-900'>
                <Inicial />

                <SobreMim />

                <Empresa />

                <Contatos/>

                <Footer />
            </main>
        </>
    )
}
