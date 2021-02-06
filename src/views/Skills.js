import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaJs,
  FaBootstrap,
  FaNpm,
} from 'react-icons/fa';
import { DiMongodb, DiGit } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';
import './Skills.css';

const skills = [
  {
    icon: <FaHtml5 />,
    name: 'HTML',
  },
  { icon: <FaCss3 />, name: 'CSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'ReactJS' },
  { icon: <FaNodeJs />, name: 'Nodejs' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <FaNpm />, name: 'NPM' },
  { icon: <DiMongodb />, name: 'Mongodb' },
  { icon: <DiGit />, name: 'Git' },
  { icon: <SiRedux />, name: 'Redux' },
];

const Skills = () => {
  return (
    <div className='skills'>
      <h1>Skills</h1>
      <div className='skills_iconContainer'>
        {skills.map((skill) => (
          <i key={skill.name} className='skills_icon'>
            {skill.icon}
          </i>
        ))}
      </div>
    </div>
  );
};

export default Skills;
