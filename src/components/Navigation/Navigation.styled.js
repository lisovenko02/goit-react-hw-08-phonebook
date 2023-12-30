import styled from 'styled-components';
import {  NavLink } from "react-router-dom"

export const NavMenu = styled.nav`
  min-height: 32px;
  display: flex;
  align-items: center;
`



export const NavLinks = styled(NavLink)`
    padding: 4px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    margin: 3px;

    &:hover {
      color: #800080;
    }
    &.active {
    color: #800080;
    border: 2px solid #800080;
  }
`