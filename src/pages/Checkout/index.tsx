import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { BasicInput, CheckoutCard, CheckoutCardInformation, CheckoutContainer, FormContainer, PaymentMethods } from "./styles";

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
          <CheckoutCardInformation>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <span>Pagamento</span>
              <small>O pagamento é feito na entrega. Escolha a forma que deseja pagar</small>
            </div>
          </CheckoutCardInformation>
          <PaymentMethods>
            <div>
              <input type="radio" name="paymentMethod" id="credit" />
              <label htmlFor="credit">
                <CreditCard size={22} color="#8047F8" />
                Cartão de crédito
              </label>
            </div>
            <div>
              <input type="radio" name="paymentMethod" id="debit" />
              <label htmlFor="debit">
                <Bank size={22} color="#8047F8" />
                Cartão de débito
              </label>
            </div>
            <div>
              <input type="radio" name="paymentMethod" id="money" />
              <label htmlFor="money">
                <Money size={22} color="#8047F8" />
                Dinheiro
              </label>
            </div>
          </PaymentMethods>
        </CheckoutCard>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CheckoutCard>

        </CheckoutCard>
      </div>
    </CheckoutContainer>
  )
}