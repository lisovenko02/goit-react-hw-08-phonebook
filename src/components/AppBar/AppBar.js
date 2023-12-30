import React from 'react'
import { PinnedHeader } from './AppBar.styled'
import Navigation from 'components/Navigation/Navigation'
import AuthNav from 'components/AuthNav/AuthNav'
import { UserMenu } from 'components/UserMenu/UserMenu'
import { useAuth } from '../../hooks/useAuth'

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <PinnedHeader>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav /> }
    </PinnedHeader>
  )
}

export default AppBar