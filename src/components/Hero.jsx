import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Mantivemos apenas a animação da "moldura" do vídeo,
  // que agora vai ser a moldura da imagem.
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* A tela de loading foi removida.
        Toda a lógica de 'useState', 'useEffect' e 'useRef' foi removida.
      */}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* AQUI ESTÁ A MUDANÇA PRINCIPAL:
          Substituímos todos os <video> e <VideoPreview> por esta tag <img>.
          Altere o "src" para o nome da sua imagem.
        */}
        <img
          src="/img/capa-wakeup.jpg" // <-- MUDE AQUI para o nome da sua imagem
          alt="Evento Wake Up"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        {/* Todo o conteúdo de texto e botão foi mantido */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          W<b>A</b>KEUP
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Vem <b>Pro</b>
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Dias 13 a 16 de novembro.<br /> Venha participar do maior festival
              esportivo do Centro-Oeste!
            </p>

            <a
              href="https://www.sympla.com.br/evento/wake-up-brasilia/3193354"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                id="watch-trailer"
                title="Quero o meu ingresso"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-yellow-300 flex-center gap-1"
              />
            </a>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        B<b>S</b>B
      </h1>
    </div>
  );
};

export default Hero;