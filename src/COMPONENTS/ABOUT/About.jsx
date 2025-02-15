// BOOTSTRAP

import React from "react";
import Navbar from "../HEADER/Navbar";
import AboutCard from "./AboutCard";
import Footer from "../FOOTER/Footer";

const AboutData = [
  {
    Image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Men's Clothing",
  },
  {
    Image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Women's Clothing",
  },
  {
    Image:
      "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Jewelery",
  },
  {
    Image:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Electronics",
  },
];

function About() {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3 flex flex-col gap-y-11 ">
        <h1 className="text-center text-[3rem] font-bold ">About Us</h1>
        <hr />
        <p className="lead text-center">
          I’m Abubakar, a first-semester university student passionate about
          software engineering. I love coding, problem-solving, and exploring
          new technologies. Every challenge excites me, and I’m eager to keep
          learning and improving my skills to build something meaningful.
        </p>

        <h2 className="text-center py-4 text-3xl font-semibold ">
          Our Products
        </h2>
        <div className="row">
          {AboutData.map((Card) => {
            return <AboutCard Image={Card.Image} text={Card.text}></AboutCard>;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
