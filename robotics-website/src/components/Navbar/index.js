// Navbar/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { Nav, NavLinkContainer, Title, Bars, NavMenu } from "./NavbarElements";

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: underline;
  padding: 10px;
  cursor: pointer;
  &.active {
    background-color: #ffcc00;
    color: #333;
  }
`;

const SubLinkContainer = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  margin-left: 10px;
`;

const SubLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  padding: 5px;
  cursor: pointer;
  &.active {
    background-color: #ffcc00;
    color: #333;
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleLessonsClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Nav>
        <Title>Fundamentals of Robotics Education</Title>
        <NavMenu>
          <NavLinkContainer>
            <StyledNavLink to="/about" activeStyle>
              About
            </StyledNavLink>
            <StyledNavLink to="/contact" activeStyle>
              Contact
            </StyledNavLink>
            <StyledNavLink to="/glossary" activeStyle>
              Glossary
            </StyledNavLink>
            <StyledNavLink to="/signup" activeStyle>
              Sign Up
            </StyledNavLink>
            <StyledNavLink onClick={handleLessonsClick} to="#">
              Lessons
            </StyledNavLink>
            <SubLinkContainer open={open}>
              <SubLink to="/lessons/1" activeStyle>
                Lesson 1
              </SubLink>
              <SubLink to="/lessons/2" activeStyle>
                Lesson 2
              </SubLink>
              <SubLink to="/lessons/3" activeStyle>
                Lesson 3
              </SubLink>
              <SubLink to="/lessons/4" activeStyle>
                Lesson 4
              </SubLink>
            </SubLinkContainer>
          </NavLinkContainer>
          <Bars />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
