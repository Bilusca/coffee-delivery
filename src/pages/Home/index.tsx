import HeroImg from 'assets/hero.png'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import { CoffeeCard } from './components/CoffeeCard';
import { HeroTitle, HomeContainer, HeroText, HeroImageContainer, HeroSection, HeroInfo, BuyerInfos, BuyerInfo, CoffeesSection, CoffeesList } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroInfo>
          <div>
            <HeroTitle>Encontre o café perfeito para qualquer hora do dia</HeroTitle>
            <HeroText>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</HeroText>
            <BuyerInfos>
              <BuyerInfo color='yellow'>
                <div>
                  <ShoppingCartSimple weight='fill' size={16} />
                </div>
                <span>Compra simples e segura</span>
              </BuyerInfo>
              <BuyerInfo color='base'>
                <div>
                  <Package weight='fill' size={16} />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </BuyerInfo>
              <BuyerInfo color='lightYellow'>
                <div>
                  <Timer weight='fill' size={16} />
                </div>
                <span>Entrega rápida e rastreada</span>
              </BuyerInfo>
              <BuyerInfo color='purple'>
                <div>
                  <Coffee weight='fill' size={16} />
                </div>
                <span>O café chega fresquinho até você</span>
              </BuyerInfo>
            </BuyerInfos>
          </div>
          <HeroImageContainer>
            <img src={HeroImg} alt="" />
          </HeroImageContainer>
        </HeroInfo>
      </HeroSection>
      <CoffeesSection>
        <h2>Nossos cafés</h2>
        <CoffeesList>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeesList>
      </CoffeesSection>
    </HomeContainer>
  )
}