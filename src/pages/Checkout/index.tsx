import { MapPinLine } from "phosphor-react";
import { BasicInput, CheckoutCard, CheckoutCardInformation, CheckoutContainer, FormContainer } from "./styles";

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
          <FormContainer>
            <BasicInput w="35%" placeholder="CEP" />
            <BasicInput w="100%" placeholder="Rua" />
            <div>
              <BasicInput w="35%" placeholder="Número" />
              <BasicInput w="65%" placeholder="Complemento" />
            </div>
            <div>
              <BasicInput w="35%" placeholder="Bairro" />
              <BasicInput w="48%" placeholder="Cidade" />
              <BasicInput w="15%" placeholder="UF" />
            </div>
          </FormContainer>
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