import Head from '../../../node_modules/next/head'
import Image from '../../../node_modules/next/image';
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.png';

import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

import Link from '../../../node_modules/next/link';

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Faça seu cadastro agora!</title>
            </Head>

            <div className={styles.containerCenter}>
                <Image width="350" height="90" src={logoImg} alt="logo community" />

                <div className={styles.login}>
                    <p>Criando sua conta</p>

                    <form>
                        <Input
                            placeholder="Digite seu nome"
                            type="text"
                        />

                        <Input
                            placeholder="Digite seu email"
                            type="text"
                        />

                        <Input
                            placeholder="Sua senha"
                            type="password"
                        />

                        <Button
                            type="submit"
                            loading={false}
                        >
                            Cadastrar
                        </Button>
                    </form>

                    <Link href="/">
                        <a className={styles.text}>Já possui uma conta? Faça login!</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
