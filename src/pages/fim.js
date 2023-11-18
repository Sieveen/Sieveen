import { Inter, Averia_Serif_Libre } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ["300", "400", "700"] })

export default function Home() {

  return (
    <div className={`${styles.container} ${inter.className}`}>

      <div className={styles.form}>
        <div className={styles.form_header}>
          <Image src="/tc.jpg" alt="The Choice" width={540} height={540} layout="responsive"/>
        </div>

        <div className={styles.form_body}>
          <div className={styles.form_content}>
          <h2 className={averia.className}>
              Parabéns!
            </h2>

            <h5 className={averia.className}>
            Dentro de 24 horas você ira receber um código via Instagram, após receber o código, escreva ele abaixo para resgatar seu ingresso com 90% de desconto:
            </h5>
            <input className={styles.form_control} placeholder="Código" type="number" />
            <p>Promoção exclusiva para The Choice Curitiba.</p>
          </div>
        </div>
      </div>

      <div>
        <span className={styles.copy}>
          © 2023 The Choice
        </span>
      </div>

    </div>
  )
}
