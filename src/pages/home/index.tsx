import { canSSRAuth } from '../../utils/canSSRAuth'

export default function Home() {
    return (
        <h1>home</h1>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})