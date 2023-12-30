import { NavLinks } from "./AuthNav.styled"

const AuthNav = () => {
  return (
    <div>
      <NavLinks to="/register">
        Register
      </NavLinks>
      <NavLinks to="/login">
        Log In
      </NavLinks>
    </div>
  )
}

export default AuthNav