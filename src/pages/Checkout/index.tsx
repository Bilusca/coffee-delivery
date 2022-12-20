import { MapPinLine } from "phosphor-react";
import { CheckoutCard, CheckoutCardInformation, CheckoutContainer } from "./styles";

export function CheckoutPage() {
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <CheckoutCard mb="0.75rem">
          <CheckoutCardInformation>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <span>Endereço de Entrega</span>
              <small>Informe o endereço onde deseja receber seu pedido</small>
            </div>
          </CheckoutCardInformation>
        </CheckoutCard>
        <CheckoutCard>
          <p>aqui</p>
        </CheckoutCard>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CheckoutCard>
          <p>aqui</p>
        </CheckoutCard>
      </div>
    </CheckoutContainer>
  )
}