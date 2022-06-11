import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome size = '24px'/>,
  },
  {
    // path: "/Profile",
    path: "/profile",
    name: "Profile",
    icon: <FaUser size = '24px'/>,
  },
  {
    path: "/",
    name: "Turing Tests",
    icon: <MdMessage size = '24px'/>,
  },
  {
    path: "/",
    name: "Coding Challenge",
    icon: <BiAnalyse size = '24px'/>,
  },
  {
    path: "/",
    name: "Get Matched",
    icon: <AiTwotoneFileExclamation size = '24px'/>,
    subRoutes: [
      {
        path: "/",
        name: "Profile ",
        icon: <FaUser size = '24px'/>,
      },
      {
        path: "/",
        name: "2FA",
        icon: <FaLock size = '24px'/>,
      },
      {
        path: "/",
        name: "Billing",
        icon: <FaMoneyBill size = '24px'/>,
      },
    ],
  },
  {
    path: "/",
    name: "Refer & Win $250",
    icon: <BsCartCheck size = '24px'/>,
  },
  {
    path: "/",
    name: "Jobs",
    icon: <BiCog size = '24px'/>,
    exact: true,
    subRoutes: [
      {
        path: "/",
        name: "Profile ",
        icon: <FaUser size = '24px'/>,
      },
      {
        path: "/",
        name: "2FA",
        icon: <FaLock size = '24px'/>,
      },
      {
        path: "/",
        name: "Billing",
        icon: <FaMoneyBill size = '24px'/>,
      },
    ],
  },
  {
    path: "/",
    name: "Settings",
    icon: <CgProfile size = '24px'/>,
  },
  {
    path: "/",
    name: "Log Out",
    icon: <AiFillHeart size = '24px'/>,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    if(!isOpen) document.getElementById("maind").style.marginLeft = "200px";
    else document.getElementById("maind").style.marginLeft= "50px";
    setIsOpen(!isOpen);
  }
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Turing
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars size = '24px' onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
