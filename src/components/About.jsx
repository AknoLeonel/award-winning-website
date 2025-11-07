import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Bem-vindo ao Wake Up
        </p>

        <AnimatedTitle
          title="O maior festival <br /> esportivo do <b>c</b>entro-oeste"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Mais de 8 esportes gratuitos: Jiu-jítsu, Skate, Escalada, Futmesa,
            Funcional, Bungee Jump, Slackline, Yoga e Corrida.</p>
          <p className="text-gray-500">
            Palco de dois campeonatos oficiais da ABW: Brasiliense de Wakeboard
            e Wakesurf.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/watermark.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
