import { MdOutlineHomeWork } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BiBookBookmark,BiBriefcase } from "react-icons/bi";
import { FaTasks,FaFileContract, FaMoneyCheckAlt, FaUserLock} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const navbarItems = [
    {
      key: '1',
      icon: <MdOutlineHomeWork />,
      label: <NavLink to={"/departments"}>Departements</NavLink>,
    },
    {
      key: '2',
      icon: <MdOutlineHomeWork />,
      label: <NavLink to={"/services"}>Services</NavLink>,
    },
    {
      key: '3',
      icon: <IoPersonSharp />,
      label: <NavLink to={"/agents"}>Agents</NavLink>,
    },
    {
      key: '4',
      icon: <FaTasks />,
      label: <NavLink to={"/missions"}>Missions</NavLink>,
    },
    {
      key: '5',
      icon: <FaFileContract />,
      label: <NavLink to={"/contrats"}>Contrats</NavLink>,
    },
    {
      key: '6',
      icon: <BiBookBookmark />,
      label: <NavLink to={"/absences"}>Absences</NavLink>,
    },
    {
      key: '7',
      icon: <BiBriefcase />,
      label: <NavLink to={"/fonctions"}>Foncions</NavLink>,
    },
    {
      key: '8',
      icon: <FaMoneyCheckAlt />,
      label: <NavLink to={"/payements"}>Payements</NavLink>,
    },
    {
      key: '9',
      icon: <FaUserLock />,
      label: <NavLink to={"/utilisateurs"}>Utilisateurs</NavLink>,
    },

  ]