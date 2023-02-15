import React from 'react';
import Developer from './Dev';
import './AboutUs.module.css';

function AboutUs() {
  const developers = [
    {
      id: 1,
      name: 'Sourav S',
      title: 'Lead Developer',
      photo: 'developer1.jpg',    },
    {
      id: 2,
      name: 'Amal Sam jacob',
      title: 'Documentation Lead',
      photo: 'https://cdn.discordapp.com/attachments/979241917852303370/1038321889023631440/IMG_20221105_104954.jpg',
    },
    {
      id: 3,
      name: 'Gokul P Sabu',
      title: 'Co - Developer',
      photo: 'developer3.jpg',
    },
    {
        id: 3,
        name: 'Sharon Shine',
        title: 'Feasibility Study and Hardware and Software Management',
        photo: 'developer3.jpg',
      },
  ];
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <section className="team">
        {developers.map((developer) => (
          <Developer
            key={developer.id}
            name={developer.name}
            title={developer.title}
            photo={developer.photo}
          />
        ))}
      </section>
    </div>
  );
}

export default AboutUs;
