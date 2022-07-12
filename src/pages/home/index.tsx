import { canSSRAuth } from '../../utils/canSSRAuth'
import Head from 'next/head'

import { Header } from '../../components/Header/index'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home - The.Doctors</title>
            </Head>

            <div>
                <Header />

                <h1>home</h1>
            </div>
        </>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})