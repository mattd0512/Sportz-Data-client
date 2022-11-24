import { findByLabelText } from '@testing-library/react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #F1DDBF;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;`

  export const NavLink = styled(Link)`
    color: #525E75;
    display: flex;
    align-items: center;
    text-decoration: underline;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000; 
    }`;

export const Bars = styled(FaBars)`
display: none;
color: #525E75;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    front-sized: 1.8rem;
    cursor: pointer;
}`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
}`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #525E75;
    padding: 10px 22px;
    color: #000000;
    outline: dashed black;
    border: none;
    cursor: pointer;
    transition; all 0.2s ease-in-out;
    text-decoration: underline;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #525E75;
    }`;