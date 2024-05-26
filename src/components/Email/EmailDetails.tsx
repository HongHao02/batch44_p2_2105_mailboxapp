import { AppDispatch, RootState } from "@/app/store";

import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Stack } from "@mui/material";
import moment from "moment";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useParams } from "react-router-dom";
import _ from 'lodash'
import { useEffect } from "react";
import { Email } from "@/types/EmailType";
import { addActiveEmail } from "@/features/emailStore/emailStoreSlice";

function EmailDetails() {
  const { activeMail, emails } = useSelector((state: RootState) => state.emailStore);
  const {mailId}= useParams();
  const dispatch: AppDispatch= useDispatch()
  

  let mailIdFormat : number;
  if(mailId){
    mailIdFormat= parseInt(mailId?.slice(1, mailId.length))
  }
  
  console.log('mailID ', parseInt(mailId?.slice(1, mailId.length) || ''));
  

  useEffect(()=>{
    const result : Email[]= _.filter(emails, (email: Email)=> email.id == mailIdFormat)
    if(result){
      dispatch(addActiveEmail(result[0]))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, emails, mailId])
  
  return (
    <div className="h-full">
      {activeMail ? (
        <>
          <div className="ps-14 py-4 font-bold text-2xl">
            {activeMail?.subject}
          </div>
          <div className="flex gap-4">
            <Avatar alt="Travis Howard">
              {activeMail.from.name.slice(0, 2)}
            </Avatar>
            <div className="flex flex-1 flex-col">
              <div className="flex gap-2 text-sm">
                <span className="font-bold">{activeMail?.from.name}</span>
                <span className="font-light">{`<${activeMail?.from.email}>`}</span>
                <div className="flex flex-1 gap-1 justify-end ">
                  <div>
                    {moment(
                      activeMail?.time,
                      "DD/MM/YYYY hh:mm:ss",
                      true
                    ).format("LL")}
                  </div>
                  <StarBorderIcon fontSize="small"></StarBorderIcon>
                </div>
              </div>
              <div className="text-sm font-light">{`to <${activeMail?.to.name}>`}</div>
              <div className="mt-4 text-justify">{activeMail?.content}</div>
              <div className="mt-6">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<ReplyIcon />}
                    color="inherit"
                  >
                    Reply
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<ReplyAllIcon />}
                    color="inherit"
                  >
                    Reply on
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                    color="inherit"
                  >
                    Foward
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-full justify-center items-center">
          No email to show
        </div>
      )}
    </div>
  );
}

export default EmailDetails;
