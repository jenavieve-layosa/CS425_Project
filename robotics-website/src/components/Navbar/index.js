// Navbar/index.js

import React from "react";
import { Nav, NavLink, NavMenu, Bars, Title, NavLinkContainer, LessonsLink, SubLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Title>Fundamentals of Robotics Education</Title>
        <NavMenu>
          <NavLinkContainer>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact Us
            </NavLink>
            <NavLink to="/blogs" activeStyle>
              Blogs
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
              Sign Up
            </NavLink>
            <LessonsLink to="/lessons" activeStyle>
              Lessons
            </LessonsLink>
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
          </NavLinkContainer>
          <Bars />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
