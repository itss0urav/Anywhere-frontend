import React from "react";
import Developer from "./Dev";
import styles from "./AboutUs.module.css";

function AboutUs() {
  const developers = [
    {
      id: 1,
      name: "Sourav S",
      title: "Lead Developer",
      photo: "https://media.discordapp.net/attachments/1070984839077036052/1079693185279864882/1.png?width=911&height=606",
    },
    {
      id: 2,
      name: "Amal Sam jacob",
      title: "Producer & Documentation Lead",
      photo:
        "https://media.discordapp.net/attachments/1070984839077036052/1079692614942597170/3.png?width=911&height=544",
    },
    {
      id: 3,
      name: "Gokul P Sabu",
      title: "Co - Developer",
      photo: "https://media.discordapp.net/attachments/1070984839077036052/1079693494949527572/2.png?width=911&height=604",
    },
    {
      id: 3,
      name: "Sharon Shine",
      title: "Feasibility Study and Hardware and Software Management",
      photo: "https://cdn.discordapp.com/attachments/979241917852303370/1083277442195652719/IMG_0132.png",
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
          />
        ))}
      </section>
    </div>
  );
}

export default AboutUs;
