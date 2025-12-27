import { IoIosContact } from "react-icons/io";
import {
  MdOutlineWorkOutline,
  MdPreview,
  MdCastForEducation,
  MdOutlineVolunteerActivism,
} from "react-icons/md";
import { SiSkillshare, SiEventstore } from "react-icons/si";
import { FaLanguage } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";

export const ResumeIcons = {
  summary: <IoIosContact />,
  workExperience: <MdOutlineWorkOutline />,
  skills: <SiSkillshare />,
  education: <MdCastForEducation />,
  quickOverview: <MdPreview />,
  volunteer: <MdOutlineVolunteerActivism />,
  languages: <FaLanguage />,
  projects: <SiEventstore />,
  contact: <RiContactsBook3Line />,
};
