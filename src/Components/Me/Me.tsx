import Tools from "../Tools/Tools";

import Reveal from "../../Containers/Animations/Reveal";
import me from "../../assets/imgs/Me.jpg";
const Me = () => {
  return (
    <Reveal>
      <section className="relative min-h-svh flex flex-col justify-center space-y-5 text-center w-9/10 m-auto pt-6 pb-16 sm:pb-30">
        <h3 className="text-xl sm:text-3xl text-gray-400 m-0 mt-10">
          Hi I'm ...
        </h3>

        <Reveal>
          <h1 className="md:text-[90px] text-[clamp(36px,7vw,56px)]  pb-2 font-bold bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            {"<Muhamed Essam />"}
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
