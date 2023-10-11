import { Container } from "./styles"

import { Header } from '../../components/Header'
import { DishDetails } from "../../components/DishDetails"
import { Footer } from '../../components/Footer'

export function Dishes() {
  return (
    <Container>
      <Header />

      <main>
      
          <DishDetails
            imgUrl="src/assets/Mask-group-12.png"
            title="Nome do prato"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial." 
          />
       
      </main>

      <Footer />
    </Container>
  )
}