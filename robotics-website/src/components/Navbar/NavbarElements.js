// NavbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: bold; // Keep bold for the title
`;

export const Nav = styled.nav`
  background: #3399ff; /* Change this to your desired background color */
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #ffffff; /* Change this to your desired link color */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffcc00; /* Change this to your desired active link color */
  }
  &:hover {
    background-color: #ffcc00; /* Change this to your desired hover color */
    color: #333; /* Change this to your desired hover text color */
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #ffffff; /* Change this to your desired border color */
  border-radius: 5px;
`;

export const NavLinks = styled.div`
  display: flex;
`;


export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LessonsLink = styled(NavLink)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffcc00;
  }
  &:hover {
    background-color: #ffcc00;
    color: #333;
  }
`;

export const SubLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffcc00;
  }
  &:hover {
    color: #333;
  }
`;



export const GlossaryLink = styled(NavLink)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffcc00;
  }
  &:hover {
    background-color: #ffcc00;
    color: #333;
  }
`;

