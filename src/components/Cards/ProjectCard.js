import React from "react";
import {
  Card,
  Image,
  Tags,
  Tag,
  Details,
  Title,
  Date,
  Description,
} from "./ProjectCardStyle";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Tags>
        {project.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
    </Card>
  );
};

export default ProjectCard;
