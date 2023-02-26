import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  BasicInput,
  CheckoutCard,
  CheckoutCardInformation,
  CheckoutContainer,
  FormContainer,
  PaymentMethods,
} from './styles'

import { CheckoutCardComponent } from './components/CheckoutCardComponent'
import { checkoutSchema, CheckoutSchemaType } from 'lib/checkoutSchema'

export function CheckoutPage() {
  const { register, handleSubmit } = useForm<CheckoutSchemaType>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      estate: '',
      neighborhood: '',
      number: '',
      street: '',
      payment: '',
    },
  })

  function submitCoffeeDelivery(data: CheckoutSchemaType) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(submitCoffeeDelivery)}>
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
              <BasicInput w="35%" placeholder="CEP" {...register('cep')} />
              <BasicInput w="100%" placeholder="Rua" {...register('street')} />
              <div>
                <BasicInput
                  w="35%"
                  placeholder="Número"
                  {...register('number')}
                />
                <BasicInput
                  w="65%"
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </div>
              <div>
                <BasicInput
                  w="35%"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                <BasicInput
                  w="48%"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <BasicInput w="15%" placeholder="UF" {...register('estate')} />
              </div>
            </FormContainer>
          </CheckoutCard>
          <CheckoutCard>
            <CheckoutCardInformation>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <span>Pagamento</span>
                <small>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </small>
              </div>
            </CheckoutCardInformation>
            <PaymentMethods>
              <div>
                <input
                  type="radio"
                  {...register('payment')}
                  value="credit"
                  id="credit"
                />
                <label htmlFor="credit">
                  <CreditCard size={22} color="#8047F8" />
                  Cartão de crédito
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register('payment')}
                  value="debit"
                  id="debit"
                />
                <label htmlFor="debit">
                  <Bank size={22} color="#8047F8" />
                  Cartão de débito
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register('payment')}
                  value="money"
                  id="money"
                />
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
          <CheckoutCardComponent />
        </div>
      </form>
    </CheckoutContainer>
  )
}
