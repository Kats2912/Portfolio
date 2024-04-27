import React from "react";
import {
  Card,
  Top,
  Image,
  Body,
  Role,
  Company,
  Date,
  Description,
  Skills,
  ItemWrapper,
  Skill,
  Document,
} from "./ExperienceCardStyle";

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img}></Image>
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience.desc}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience.skills.map((skill) => {
                  return <Skill>{skill}</Skill>;
                })}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
