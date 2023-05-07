import React from "react";
import styles from "./AboutUs.module.css";

function Developer(props) {
  const { photo, name, title, email } = props;
  return (
    <div className={styles.developer}>
      <img className={styles.image} src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
      <p>{email}</p>
    </div>
  );
}

function AboutUs() {
  const developers = [
    {
      id: 1,
      name: "Sourav S",
      title: "Lead Developer & Project Manager",
      photo:
        "https://media.discordapp.net/attachments/1070984839077036052/1079693185279864882/1.png?width=911&height=606",
      email: "souravhacks987@gmail.com",
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
      <h1>About Us</h1>
      <section className={styles.team}>
        {developers.map((developer) => (
          <Developer
            key={developer.id}
            name={developer.name}
            title={developer.title}
            photo={developer.photo}
            email={developer.email}
          />
        ))}
      </section>
    </div>
  );
}

export default AboutUs;
