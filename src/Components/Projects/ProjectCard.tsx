import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay, EffectCards, Pagination } from "swiper/modules";
import Reveal from "../../Containers/Animations/Reveal";
import img1 from "../../assets/imgs/1.png";
import img1Mobile from "../../assets/imgs/1-mobile.png";
import img2 from "../../assets/imgs/2.png";
import img2Mobile from "../../assets/imgs/2-mobile.png";
import img3 from "../../assets/imgs/3.png";
import img3Mobile from "../../assets/imgs/3-mobile.png";
import img4 from "../../assets/imgs/4.png";
import img4Mobile from "../../assets/imgs/4-mobile.png";

interface Project {
  id: number;
  img: string;
  imgMobile: any;
  title: string;
  link: string;
  tech: string[];
}
const Proj: Project[] = [
  {
    id: 1,
    img: img1,
    imgMobile: img1Mobile,
    title: "YUMYUM",
    link: "yumyum-sigma.vercel.app",
    tech: ["Html5", "CSS3", "Java Script", "Bootstrab"],
  },
  {
    id: 2,
    img: img2,
    imgMobile: img2Mobile,
    title: "Y2B",
    link: "",
    tech: ["Html5", "CSS3", "Java Script"],
  },
  {
    id: 3,
    img: img3,
    imgMobile: img3Mobile,
    title: "Momentum 25",
    link: "https://momentum-snowy-alpha.vercel.app/",
    tech: ["Html5", "CSS3", "Java Script"],
  },
  {
    id: 4,
    img: img4,
    imgMobile: img4Mobile,
    title: "Spirit",
    link: "https://spirit-iota-one.vercel.app/",
    tech: ["Html5", "CSS3", "Java Script"],
  },
];
interface TECH {
  [key: string]: string;
}
const techpics: TECH = {
  Html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "Java Script":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  Bootstrab:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
};

const ProjectCard = () => {
  return (
    <Reveal>
      <Swiper
        speed={600}
        resistanceRatio={0.85}
        touchRatio={1.2}
        threshold={5}
        longSwipesRatio={0.3}
        longSwipesMs={300}
        dir="ltr"
        slidesPerView={1}
        spaceBetween={30}
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, EffectCards, Pagination]}
        className="mySwiper w-[90%] md:w-2/3  mx-auto"
      >
        {Proj.map((project) => (
          <SwiperSlide key={project.id}>
            <a
              href={project.link}
              className={`bg-white rounded-2xl h-120 hover:shadow-xl flex flex-col justify-end relative transition-all duration-500 md:bg-(image:--desktop-img)   bg-(image:--mobile-img) `}
              style={
                {
                  "--desktop-img": `url(${project.img})`,
                  "--mobile-img": `url(${project.imgMobile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                } as React.CSSProperties
              }
            >
              <div className="absolute inset-0 bg-black opacity-50 hover:opacity-70 rounded-2xl transition-opacity duration-300"></div>
              <div className="z-10 pointer-events-none px-3 py-2">
                <h1 className="text-white text-2xl font-bold pb-3">
                  {project.title}
                </h1>
                <ul className="flex flex-row gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <img
                        className="w-7 h-7"
                        src={techpics[tech]}
                        alt={tech}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Reveal>
  );
};

export default ProjectCard;
