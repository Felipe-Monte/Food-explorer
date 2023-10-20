import { Container, Form, ContainerInputs, ContainerTagsAndPrice, WrapperTextArea, ContainerButton, WrapperInput } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

export function AddDish() {
  return (
    <Container>
      <Header />

      <main>

        <Form>
          <h1>Adicionar Prato</h1>

          <ContainerInputs>
            <WrapperInput>
              <label htmlFor="input1">Imagem do prato</label>
              <Input placeholder="input 1" id="input1" />
            </WrapperInput>

            <WrapperInput>
              <label htmlFor="input2">Nome</label>
              <Input placeholder="input 2" id="input2" />
            </WrapperInput>

            <WrapperInput>
              <label htmlFor="input3">Categoria</label>
              <Input placeholder="input 3" id="input3" />
            </WrapperInput>

          </ContainerInputs>

          <ContainerTagsAndPrice>
            <WrapperInput>
              <label htmlFor="input4">Ingredientes</label>
              <Input placeholder="input 1" id="input4" />
            </WrapperInput>

            <WrapperInput>
              <label htmlFor="input5">Preço</label>
              <Input placeholder="input 2" id="input5" />
            </WrapperInput>

          </ContainerTagsAndPrice>

          <WrapperTextArea>
            <label htmlFor="textarea">Descrição</label>
            <textarea id="textarea"></textarea>
          </WrapperTextArea>

          <ContainerButton>
            <Button title="Salvar alterações"/>
          </ContainerButton>

        </Form>

      </main>

      <Footer />

    </Container>
  )
}