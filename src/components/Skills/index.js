import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  SkillsContainer,
  Skill,
  SkillTitle,
  SkillList,
  SkillItem,
  SkillImage,
} from "./SkillsStyle";
import { skills } from "../../data/constants";

export const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 2 years
        </Desc>
        <SkillsContainer>
          {skills.map((item) => {
            return (
              <Skill>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill) => {
                    return (
                      <SkillItem>
                        <SkillImage src={skill.image} />
                        {skill.name}
                      </SkillItem>
                    );
                  })}
                </SkillList>
              </Skill>
            );
          })}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};
