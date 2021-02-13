import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const contactPlatforms = [
  {
    platformName: 'Github',
    platformLink: 'https://github.com/aksharma-7',
    platformIcon: <FaGithub />,
  },
  {
    platformName: 'LinkedIn',
    platformLink: 'https://www.linkedin.com/in/aksharma-7/',
    platformIcon: <FaLinkedin />,
  },
  // {
  //   platformName: 'Email',
  //   platformLink: 'Github',
  //   platformIcon: <FaEnvelope />,
  // },
];

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <div className='contact-section-header'>
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div className='contact-links'>
        {contactPlatforms.map((platform) => (
          <a
            href={platform.platformLink}
            target='_blank'
            className='btn contact-details'
          >
            <span>
              {platform.platformIcon} {platform.platformName}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
