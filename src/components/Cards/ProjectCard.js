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

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      {console.log(project.image)}
      <Image src={project.image} />
      <Tags>
        {project.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        {project.description.map((desc) => {
          return <Description>{desc}</Description>;
        })}
      </Details>
    </Card>
  );
};

export default ProjectCard;
