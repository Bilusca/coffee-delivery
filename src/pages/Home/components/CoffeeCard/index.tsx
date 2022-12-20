import { ShoppingCartSimple } from "phosphor-react";
import { AddShoppingCartButton, CardContainer, ContainerTags, QuantityForm } from "./styles";
import americanoImg from 'assets/coffees/Americano.png'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={americanoImg} />
      <ContainerTags>
        <span>Tradicional</span>
      </ContainerTags>
      <h4>Expresso Tradicional</h4>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <footer>
        <span>R$ <b>9,90</b></span>
        <QuantityForm>
          <button>+</button>
          <input type="number" name="quantity" />
          <button>-</button>
        </QuantityForm>
        <AddShoppingCartButton>
          <ShoppingCartSimple size={18} weight="fill" color="#ffffff" />
        </AddShoppingCartButton>
      </footer>
    </CardContainer>
  )
}