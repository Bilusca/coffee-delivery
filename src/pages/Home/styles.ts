import styled from "styled-components";
import heroBg from 'assets/hero-bg.png'

export const HomeContainer = styled.div`
  width: 100%;
`

export const HeroSection = styled.main`
  background-image: url(${heroBg});
  background-size: cover;
`

export const HeroInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.875rem 0 6.75rem;
  gap: 3.5rem;
  max-width: 70rem;
  margin: 0 auto;
`

export const HeroTitle = styled.h1`
  font-size: ${(props) => props.theme['text-9']};
  line-height: 130%;
  font-weight: 800;
  margin-bottom: 1rem;
`

export const HeroImageContainer = styled.div`
  display: block;
  width: 29.75rem;
  height: 22.5rem;
  
  img {
    display: block;
    width: auto;
    height: 100%;
  }
`

export const HeroText = styled.p`
  font-size: ${(props) => props.theme['text-6']};
  line-height: 130%;
  margin-bottom: 4.125rem;
`

export const BuyerInfos = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
  list-style: none;
`

const BULLET_COLORS = {
  yellow: 'yellow-700',
  lightYellow: 'yellow-500',
  base: 'base-600',
  purple: 'purple-500'
} as const

interface BuyerInfoProps {
  color: keyof typeof BULLET_COLORS
}

export const BuyerInfo = styled.li<BuyerInfoProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    background-color: ${(props) => props.theme[BULLET_COLORS[props.color]]};
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme['white']}
    }
  }

  span {
    line-height: 130%;
    color: ${(props) => props.theme['base-600']}
  }
`

export const CoffeesSection = styled.section`
  max-width: 70rem;
  margin: 2rem auto 0;

  h2 {
    font-size: ${(props) => props.theme['text-8']};
    line-height: 130%;
    color: ${(props) => props.theme['base-700']};
    margin-bottom: 3.375rem;
  }
`

export const CoffeesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`