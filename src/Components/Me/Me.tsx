import { useRef } from "react";
import Tools from "../Tools/Tools";
import Reveal from "../../Containers/Animations/Reveal";
import me from "../../assets/imgs/Me.jpg";
const Me = () => {
  return (
    <Reveal>
      <section className="relative min-h-[100dvh] space-y-5 text-center pt-20 pb-[clamp(56px,10vw,56px)]  sm:pt-20 w-9/10 m-auto  block">
        <h3 className="text-3xl text-gray-400 ">Hi I'm ...</h3>

        <Reveal>
          <h1 className="md:text-[90px] text-[clamp(56px,7vw,56px)] leading-14 pb-2 font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Muhamed Essam
          </h1>
        </Reveal>
        <img className="m-auto w-30 h-30 rounded-full mb-7" src={me}></img>
        <h2 className="md:text-3xl text-2xl text-white leading-1">
          Front-End Web Developer
        </h2>
        <p className="md:text-xl text-gray-400 text-m  ">
          "Passionate about creating clean, modern, and user-friendly web
          interfaces with a focus on performance and smooth user experience."
        </p>
        <Tools />
      </section>
    </Reveal>
  );
};

export default Me;
