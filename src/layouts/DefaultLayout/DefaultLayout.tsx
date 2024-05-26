import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Tooltip } from "@mui/material";
import Header from "@/layouts/components/Header/Header";
import SidebarCustom from "../components/Sidebar/SidebarCustom";
import { Outlet } from "react-router-dom";
import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addEmails } from "@/features/emailStore/emailStoreSlice";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


import { fakeEmails } from "@/data/Email";
import Menu from "../components/Menu/Menu";
function DefaultLayout() {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(addEmails(fakeEmails))
  }, [dispatch])

  return (
    <div className="flex flex-col gap-1 overflow-x-hidden min-h-screen">
      <Header></Header>
      <div className="flex bg-white mt-12 sm:mt-16 flex-1 mb-2">
        <div className="flex flex-col  items-center w-14 bg-white shadow-md">
          <Tooltip title="Delete" placement="right">
            <IconButton>
              <MailIcon></MailIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Chat" placement="right">
            <IconButton>
             <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
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
          <div className=" h-11 rounded-md"></div>
          <div className="bg-slate-100 shadow-md rounded-md p-2 h-12">
            <Menu></Menu>
          </div>
          <div className="flex flex-1 ">
            <div className="w-2/12 hidden lg:block p-2 rounded-md">
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
