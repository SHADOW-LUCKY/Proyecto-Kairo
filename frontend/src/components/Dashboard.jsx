import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/* images */
import kairo from "../assets/kairo.png";
import { HelpCircle } from "@styled-icons/boxicons-solid/HelpCircle";
import { BugReport } from "@styled-icons/material-sharp/BugReport";
import { DeleteForever } from "@styled-icons/material/DeleteForever";
import { Refresh } from "@styled-icons/evaicons-solid/Refresh";
import { PlusCircleFill } from "@styled-icons/bootstrap/PlusCircleFill";
import { Gear } from "@styled-icons/evil/Gear";
import { BellRing } from "@styled-icons/boxicons-solid/BellRing";
/* components */
import DashboardMenuList from "./DashboardMenuList";
import DashboardGetAll from "./DashboardGetAll";
import DashboardAddModal from "./DashboardAddModal";
/*context */
import { useAuth } from "../contexts/AuthContext";
/* function */
export default function Dashboard() {
  const { setDelete } = useAuth();
  const { deleter } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-screen bg-white">
      <div className="bg-white h-14  fixed top-0 left-0 right-0 shadow-xl">
        <div className="flex justify-between items-center md:hidden">
          <button className="m-4" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-black w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div>
            <img src={kairo} alt="..." className="w-8 h-8 mr-4" />
          </div>
        </div>
        <div className="hidden md:flex md:justify-end">
          <div className="flex w-9/12 h-full justify-between ">
            <div className="text-center text-black text-xl cursor-pointer py-3 my-auto flex">
              <PlusCircleFill size={25} color="#FF7221" />
              <p className="ml-2">
                <label htmlFor="anadir">Añadir</label>
              </p>
            </div>
            <div className="hidden md:flex md:justify-end">
              <div className="flex w-9/12 h-full justify-between ">
                <div className="text-center text-black text-xl cursor-pointer py-3 my-auto flex">
                  <PlusCircleFill size={25} color="#FF7221" />
                  <p className="ml-2">
                    <label htmlFor="anadir">Añadir</label>
                  </p>
                </div>
                <div
                  className="text-center text-black text-xl cursor-pointer py-3 my-auto flex"
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  <Refresh size={25} color="#FF7221" />
                  <p className="ml-2">Refrescar</p>
                </div>
                <div
                  className="text-center text-black text-xl cursor-pointer py-3 my-auto flex"
                  onClick={() => setDelete(!deleter)}
                >
                  <DeleteForever size={30} color="#FF7221" />
                  <p className="ml-2">Eliminar</p>
                </div>
                <div className="h-full my-auto">
                  <img src={kairo} alt="..." className="w-9" />
                </div>
                <div className="text-center text-black text-xl cursor-pointer py-3 my-auto flex">
                  <BugReport size={32} color="#FF7221" />
                  <p className="ml-2" onClick={() => navigate("/reports")}>
                    Reportar
                  </p>
                </div>
                <div className="text-center text-black text-xl cursor-pointer py-3 my-auto flex">
                  <HelpCircle size={32} color="#FF7221" />
                  <p className="ml-2">Ayuda</p>
                </div>
              </div>
              <div className="flex w-2/12 h-14 justify-end ">
                <div className="mr-2 my-auto">
                  <Gear size={20} color="#FF7221" />
                </div>
                <div className="mr-2 my-auto">
                  <BellRing size={20} color="#FF7221" />
                </div>
                <div className="mr-5 my-auto">
                  <div className="popover">
                    <label className="popover-trigger my-2 " tabIndex="0">
                      <img
                        src="https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_800_800/0/1516929468945?e=2147483647&v=beta&t=d5P5hoCOyufB3Qkq935Dn4jIIpyoMVX_FweqCM3erjE"
                        alt="..."
                        className="w-9 rounded-full"
                      />
                    </label>
                    <div
                      className="popover-content popover-bottom-left bg-slate-400"
                      tabIndex="0"
                    >
                      <div className="popover-arrow bg-slate-400 border"></div>
                      <div className="p-4 text-sm text-black text-center">
                        <button className="btn ">Logout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              !open && "hidden"
            } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
            onClick={() => setOpen(false)}
          ></div>
          <div
            className={`${
              open ? "w-80" : "w-0"
            } bg-white  min-h-screen fixed top-0 left-0 transition-all duration-300`}
          >
            <div className={`${!open && "hidden"} mt-3`}>
              <div className="flex justify-between mb-14">
                <button
                  className="ml-4  text-black "
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="flex flex-row ">
                  <div className="mr-2 my-auto">
                    <Gear size={20} color="#FF7221" />
                  </div>
                  <div className="mr-2 my-auto">
                    <BellRing size={20} color="#FF7221" />
                  </div>
                  <div className="mr-5 my-auto">
                    <div className="popover">
                      <label className="popover-trigger my-2 " tabIndex="0">
                        <img
                          src="https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_800_800/0/1516929468945?e=2147483647&v=beta&t=d5P5hoCOyufB3Qkq935Dn4jIIpyoMVX_FweqCM3erjE"
                          alt="..."
                          className="w-9 rounded-full"
                        />
                      </label>
                      <div
                        className="popover-content popover-bottom-left bg-slate-400"
                        tabIndex="0"
                      >
                        <div className="popover-arrow bg-slate-400 border"></div>
                        <div className="p-4 text-sm text-black text-center">
                          <button className="btn ">Logout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DashboardMenuList />
            </div>
          </div>
          <DashboardGetAll />
          <div className="flex justify-center">
            <button className="bg-orange-500 py-4 px-10 rounded-full">
              <label htmlFor="anadir">Añadir Elementos</label>
            </button>
          </div>
        </div>
      </div>
      <DashboardAddModal />
    </div>
  );
}
