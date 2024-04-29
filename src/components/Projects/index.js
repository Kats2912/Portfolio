import React, { useState } from "react";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  ToogleGroup,
  ToogleButton,
  Divider,
  CardContainer,
} from "./ProjectStyle";

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToogleGroup>
          {toggle === "all" ? (
            <ToogleButton
              active
              value="all"
              onClick={() => {
                setToggle("all");
              }}
            >
              ALL
            </ToogleButton>
          ) : (
            <ToogleButton
              value="all"
              onClick={() => {
                setToggle("all");
              }}
            >
              ALL
            </ToogleButton>
          )}

          <Divider />
          {toggle === "web app" ? (
            <ToogleButton
              active
              value="web app"
              onClick={() => {
                setToggle("web app");
              }}
            >
              WEB APPS
            </ToogleButton>
          ) : (
            <ToogleButton
              value="web app"
              onClick={() => {
                setToggle("web app");
              }}
            >
              WEB APPS
            </ToogleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToogleButton
              active
              value="android app"
              onClick={() => {
                setToggle("android app");
              }}
            >
              ANDROID APPS
            </ToogleButton>
          ) : (
            <ToogleButton
              value="android app"
              onClick={() => {
                setToggle("android app");
              }}
            >
              ANDROID APPS
            </ToogleButton>
          )}
        </ToogleGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => {
              return <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />;
            })}
          {projects
            .filter((item) => {
              return item.category === toggle;
            })
            .map((project) => {
              return <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />;
            })}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
