import { useAuth } from "../../hooks/useAuth";
import { NavLinks, NavMenu } from "./Navigation.styled"

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  
  return (
<NavMenu>
    <NavLinks to='/'>
        Home
    </NavLinks>

    {isLoggedIn && 
    <NavLinks to='/contacts'>
        Contacts
    </NavLinks>}
</NavMenu>
  )
}

export default Navigation