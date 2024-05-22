import { Email } from "@/types/EmailType";
import moment from "moment";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import {
  addActiveEmail,
  addEmails,
} from "@/features/emailStore/emailStoreSlice";
import { useEffect } from "react";

const fakeEmails: Email[] = [
  {
    id: 1,
    from: {
      idUser: 1,
      email: "yilive-seca51@gmail.com",
      name: "Industry Internship",
    },
    to: {
      idUser: 999,
      email: "honghaocp@gmail.com",
      name: "Hong Hao",
    },
    subject: "[Batch 44] Admission test on May 17, 2024",
    content:
      "Generate up to 10,000 fake or unregistered email addresses in bulk using completely randomized names and user ids. You can specify the domain name or choose between the most commonly used email providers including Gmail, Yahoo, Outlook, Protonmail, and AOL. The local part of the email address is completely random and there is no guarantee that it will be an unregistered email address, though the probability that they are free is extremely high (99.99% for random and pronounceable ids).",
    time: "24/12/2019 09:15:00",
  },
  {
    id: 2,
    from: {
      idUser: 2,
      email: "suki_234@gmail.com",
      name: "BC05",
    },
    to: {
      idUser: 999,
      email: "honghaocp@gmail.com",
      name: "Hong Hao",
    },
    subject: "[Batch 44] Admission test on May 18, 2024",
    content:
      "Kindly be informed that you are requested to join IQ Test with the schedule as below:",
    time: "11/11/2019 10:15:00",
  },
  {
    id: 3,
    from: {
      idUser: 1,
      email: "yilive-seca51@gmail.com",
      name: "Industry Internship",
    },
    to: {
      idUser: 999,
      email: "honghaocp@gmail.com",
      name: "Hong Hao",
    },
    subject: "[Batch 42] Admission test on October 19, 2024",
    content: "Lorem is a random article to test elements",
    time: "10/12/2020 09:15:00",
  },
  {
    id: 4,
    from: {
      idUser: 3,
      email: "leibang_kt05@gmail.com",
      name: "Economics KT05",
    },
    to: {
      idUser: 999,
      email: "honghaocp@gmail.com",
      name: "Hong Hao",
    },
    subject: "[Batch 41] Admission test on September 20, 2024",
    content: "21/05/2024",
    time: "12/12/2020 09:15:00",
  },
  {
    id: 5,
    from: {
      idUser: 1,
      email: "yilive-seca51@gmail.com",
      name: "Industry Internship",
    },
    to: {
      idUser: 999,
      email: "honghaocp@gmail.com",
      name: "Hong Hao",
    },
    subject: "[Batch 45] Admission test on May 21, 2024",
    content:
      "If you need a custom SVG icon (not available in the Material Icons) you can use the SvgIcon wrapper. This component extends the native <svg> element:",
    time: "24/12/2019 09:20:00",
  },
  {
    id: 6,
    from: {
      idUser: 4,
      email: "sunchei-seca51@gmail.com",
      name: "Batch 44",
    },
    to: {
      idUser: 999,
      email: "honghaocp@gmail.com",
      name: "Hong Hao",
    },
    subject: "[Batch 44] Admission test on August 22, 2024",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error consectetur earum quasi eos aspernatur cupiditate assumenda ullam recusandae porro, itaque nam nobis voluptate dignissimos neque dolor quaerat placeat dolore! Explicabo.",
    time: "24/12/2019 10:15:00",
  },
];

interface EmailItemProps {
  email: Email;
}
export function EmailItem({ email }: EmailItemProps) {
  const { activeMail } = useSelector((state: RootState) => state.emailStore);
  const dispatch: AppDispatch = useDispatch();
  return (
    <div
      className={`w-full flex p-2 gap-1  text-[12px] cursor-pointer hover:border-gray-600 hover:border-[1px] ${
        (activeMail?.id ?? 0) == email.id ? "bg-slate-200" : ""
      }`}
      onClick={() => dispatch(addActiveEmail(email))}
    >
      <FiberManualRecordIcon
        color="disabled"
        fontSize="small"
      ></FiberManualRecordIcon>
      <div className="flex-1">
        <div className="flex">
          <p>{email.from.name}</p>
          <p className="flex justify-end ml-auto">
            {moment(email.time, "DD/MM/YYYY hh:mm:ss", true).format("LL")}
          </p>
        </div>
        <div>{email.subject}</div>
      </div>
    </div>
  );
}

function EmailDasboard() {
  const { activeMail, emails } = useSelector(
    (state: RootState) => state.emailStore
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(addEmails(fakeEmails));
  }, []);
  return (
    <div className="flex gap-2">
      <div className="w-1/6 border-r-[1px] border-r-slate-200 p-2 rounded-sm">
        NavBar
      </div>
      <div className="w-2/6 border-x-[1px] border-r-slate-200 p-2">
        {emails.map((email: Email, index: number) => (
          <EmailItem key={index} email={email}></EmailItem>
        ))}
      </div>
      <div className="w-3/6 border-x-[1px] border-r-slate-200 p-2">
        {activeMail?.content}
      </div>
    </div>
  );
}

export default EmailDasboard;
