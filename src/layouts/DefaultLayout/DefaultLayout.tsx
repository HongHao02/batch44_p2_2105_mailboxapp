import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Tooltip } from "@mui/material";

import Header from "@/layouts/components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import InboxEmail from "@/components/Email/InboxEmail";


function DefaultLayout() {
  return (
    <div className="flex flex-col gap-1">
      {/* <div className="flex h-10 bg-blue-400">
        
      </div> */}
      <Header></Header>
      <div className="flex bg-gray-200 mt-12 sm:mt-16 min-h-full">
        <div className="flex flex-col  items-center w-14 bg-green-400">
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
          <div className="bg-blue-400 h-10"></div>
          <div className="bg-blue-800 h-10"></div>
          <div className="flex flex-1 bg-yellow-200 ">
            <div className="w-1/6 hidden lg:block">
              <Sidebar></Sidebar>
            </div>
            <div className="w-2/6 bg-slate-300 hidden md:block">
              <InboxEmail></InboxEmail>
            </div>
            <div className="flex-1 w-3/6">Content 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
