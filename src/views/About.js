import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaStar } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import './About.css';

const about = [
  {
    id: 'workExperience',
    title: 'Frontend Developer',
    subtitle: 'New Delhi',
    description: 'Bug Fixing',
    duration: 'Feb, 2020 - Nov, 2020',
    icon: <MdWork />,
  },
  {
    id: 'education',
    title: 'Bachelor of Technology',
    subtitle: 'Electronics and Communication Engineering',
    description: 'Jaypee University Anoopshar',
    duration: '2016 - 2020',
    icon: <FaGraduationCap />,
  },
];

const About = () => {
  return (
    <div className='about'>
      <VerticalTimeline>
        {about.map((x) => (
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{
              background:
                x.id === 'workExperience'
                  ? 'rgb(33, 150, 243)'
                  : 'rgb(233, 30, 99)',
              color: '#fff',
            }}
            contentArrowStyle={{
              borderRight:
                x.id === 'workExperience'
                  ? '7px solid  rgb(33, 150, 243)'
                  : 'rgb(233, 30, 99)',
            }}
            date={x.duration}
            iconStyle={{
              background:
                x.id === 'workExperience'
                  ? 'rgb(33, 150, 243)'
                  : 'rgb(233, 30, 99)',
              color: '#fff',
            }}
            icon={x.icon}
          >
            <h3 className='vertical-timeline-element-title'>{x.title}</h3>
            <h4 className='vertical-timeline-element-subtitle'>{x.subtitle}</h4>
            <p>{x.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default About;
