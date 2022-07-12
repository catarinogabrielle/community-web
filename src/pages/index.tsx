import Head from '../../node_modules/next/head'
import Image from '../../node_modules/next/image';
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.png';

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import Link from '../../node_modules/next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>The.Doctors - Faça seu login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image width="350" height="90" src={logoImg} alt="logo community" />

        <div className={styles.login}>
          <form>
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
              Acessar
            </Button>
          </form>

          <Link href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  )
}
