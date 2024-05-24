import { AppDispatch } from "@/app/store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
 
  addEmails,
} from "@/features/emailStore/emailStoreSlice";
import * as EmailsData from "../../data/Email";

import InboxEmail from "../Email/InboxEmail";
import { Outlet } from "react-router-dom";

const  InboxMailContainer: React.FC= ()=> {
//   const { activeMail } = useSelector((state: RootState) => state.emailStore);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(addEmails(EmailsData.fakeEmails));
  }, []);
  return (
    <div className="flex gap-2 h-full">
      <div className="w-2/5 bg-slate-100 shadow-lg hidden md:block rounded-md">
        <InboxEmail></InboxEmail>
      </div>
      <div className="flex-1 w-3/5 p-2"><Outlet></Outlet></div>
    </div>
  );
}

export default InboxMailContainer;
