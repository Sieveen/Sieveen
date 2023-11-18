import { Inter, Averia_Serif_Libre } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], weight: ["300", "400", "700"] })

export default function Home() {

  const router = useRouter()

  function handleNextPage() {
    router.push('/formulario')
  }

  return (
    <div className={`${styles.container} ${inter.className}`}>

      <div className={styles.form}>
        <div className={styles.form_header}>
          <Image src="/tc.jpg" alt="The Choice" width={540} height={540} layout="responsive"/>
        </div>

        <div className={styles.form_body}>
          <div className={styles.form_content}>
            <h2 className={averia.className}>
              LEIA ABAIXO COM ATENÇÃO!
            </h2>
            
            <h5 className={averia.className}>
            Cadastre-se agora e receba 90% de desconto no seu ingresso.
            Entre com o Instagram, para fazer parte da lista VIP e recebe o cupom mais rápido.
            Não perca a chance de viver uma noite incrível. Cadastre-se abaixo para garantir seu desconto especial.
            </h5>
            <p>Promoção exclusiva para The Choice Curitiba.</p>
          </div>

          <div className={styles.form_data}>
            <div className={styles.google} onClick={handleNextPage}>
              <div>
                <Image src="/google.svg" alt="The Choice" width={24} height={24} />
              </div>

              <span>
                Fazer login com o Google
              </span>
            </div>

            <div className={styles.facebook} onClick={handleNextPage}>
              <div>
                <Image src="/facebook.svg" alt="The Choice" width={24} height={24} />
              </div>

              <span>
                Fazer login com o Facebook
              </span>
            </div>
            <div className={styles.instagram} onClick={handleNextPage}>
              <div>
                <Image src="/instagram.svg" alt="The Choice" width={24} height={24} />
              </div>

              <span>
                Fazer login com o Instagram
              </span>
            </div>

            <span className={styles.terms}>Ao resgatar você concorda com os Termos de Uso</span>
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

