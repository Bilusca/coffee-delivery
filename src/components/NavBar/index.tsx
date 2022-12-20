import Logo from 'assets/Logo.svg'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { InfoContainer, LocationContainer, NavBarContainer, NavLinkContainer } from './styles'

export function NavBar() {
  return (
    <NavBarContainer>
      <nav>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <InfoContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <span>Goiânia, GO</span>
          </LocationContainer>
          <NavLinkContainer to="/checkout">
            <ShoppingCartSimple weight='fill' size={22} />
            <span>3</span>
          </NavLinkContainer>
        </InfoContainer>
      </nav>
    </NavBarContainer>
  )
}