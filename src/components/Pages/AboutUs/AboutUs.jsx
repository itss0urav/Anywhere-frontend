import React from "react";
import Rellax from "react-rellax";
import styles from "./AboutUs.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Developer(props) {
  const { photo, name, title, email, desc } = props;
  return (
    <div className={styles.developer}>
      <img className={styles.image} src={photo} alt={name} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <Link to="https://github.com/itss0urav" className={styles.link}>
          <p className={styles.desc}>{desc}</p>
        </Link>
      </div>
    </div>
  );
}

function AboutUs() {
  const developers = [
    {
      id: 1,
      name: "Sourav S",
      title: "Developer",
      photo:
        "https://cdn.discordapp.com/attachments/979241917852303370/1114239636403920948/1685725810978.jpg",
      email: "souravhacks987@gmail.com",
      desc: "itss0urav",
    },

    {
      id: 2,
      name: "Amal Sam jacob",
      title: "Co - Developer & DB Administrator",
      photo:
        "https://media.discordapp.net/attachments/1070984839077036052/1079692614942597170/3.png?width=911&height=544",
      email: "amalsam0898@gmail.com",
    },
    {
      id: 3,
      name: "Gokul P Sabu",
      title: "Co - Developer & DB Administrator",
      photo:
        "https://cdn.discordapp.com/attachments/1070984839077036052/1104759451459797092/DSC07600.jpg",
      email: "gokulsabu02@gmail.com",
    },
    {
      id: 4,
      name: "Sharon Shine",
      title: "Web Designer and Tech Support",
      photo:
        "https://cdn.discordapp.com/attachments/979241917852303370/1083277442195652719/IMG_0132.png",
      email: "sharonshine2002@gmail.com",
    },
  ];

  return (
    <div className={styles.aboutus}>
      <Rellax speed={-4} className={styles.parallaxLayer1}>
        <img
          src="https://media.discordapp.net/attachments/1070984839077036052/1071417517454663800/Anywhere-Logo-Final.png?width=670&height=670"
          alt="Parallax Layer 1"
          className="absolute top-0 left-0 w-full h-auto"
        />
      </Rellax>

      <h1>About Us</h1>
      <section className={styles.team}>
        {developers.map((developer) => (
          <Developer
            key={developer.id}
            name={developer.name}
            title={developer.title}
            photo={developer.photo}
            email={developer.email}
            desc={developer.desc}
          />
        ))}
      </section>
    </div>
  );
}

export default AboutUs;
