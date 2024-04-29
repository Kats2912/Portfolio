import React from "react";
import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  ButtonContainer,
  GitHubButton,
  Span,
  MobileMenu,
  MobileMenuLink,
} from "./NavbarStyledComponent";
import { Bio } from "../../data/constants";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              curson: "pointer",
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="new">Github Profile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLink
            href="#about"
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </MobileMenuLink>
          <MobileMenuLink
            href="#skills"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Skills
          </MobileMenuLink>
          <MobileMenuLink
            href="#experience"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Experience
          </MobileMenuLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
