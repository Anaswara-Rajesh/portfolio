import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">MERN Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Anaswara Rajesh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              MERN Stack Developer with 2+ years of experience, proficient in
              modern technologies such as React, Node.js, Express and MongoDB.
              Through completing projects and reviews, a strong ability to
              prioritize tasks and manage time effectively has been developed,
              ensuring the timely completion of projects and adherence to the
              highest standards.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/files/Anaswara_Rajesh_MERN.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
