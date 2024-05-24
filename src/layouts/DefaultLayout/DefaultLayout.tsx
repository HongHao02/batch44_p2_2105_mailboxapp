import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Tooltip } from "@mui/material";
import Header from "@/layouts/components/Header/Header";
import SidebarCustom from "../components/Sidebar/SidebarCustom";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div className="flex flex-col gap-1 overflow-x-hidden">
      {/* <div className="flex h-10 bg-blue-400">
        
      </div> */}
      <Header></Header>
      <div className="flex bg-white mt-12 sm:mt-16 min-h-full">
        <div className="flex flex-col  items-center w-14 bg-white shadow-md">
          <Tooltip title="Delete" placement="right">
            <IconButton>
              <MailIcon></MailIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="right">
            <IconButton>
              <MailIcon></MailIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="right">
            <IconButton>
              <MailIcon></MailIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="right">
            <IconButton>
              <MailIcon></MailIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="right">
            <IconButton>
              <MailIcon></MailIcon>
            </IconButton>
          </Tooltip>
        </div>
        <div className="flex flex-1 flex-col gap-2 px-2 min-h-[570px]">
          <div className=" h-10 rounded-md"></div>
          <div className="bg-slate-100 shadow-lg rounded-md h-10"></div>
          <div className="flex flex-1 ">
            <div className="w-2/12 hidden lg:block">
              {/* <Sidebar></Sidebar> */}
              <SidebarCustom></SidebarCustom>
            </div>
            <div className="w-10/12 bg-white">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
