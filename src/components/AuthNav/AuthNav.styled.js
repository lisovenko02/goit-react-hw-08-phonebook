import styled from 'styled-components';

import { NavLink } from "react-router-dom";

export const NavLinks = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 4px 16px;
    border-radius: 4px;
    font-weight: 500;
    color: black;
    margin: 3px;

    &:hover {
      color: #800080;
    }
    &.active {
    color: #800080;
    border: 2px solid #800080;
    }
`

