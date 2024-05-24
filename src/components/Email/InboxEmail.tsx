import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { EmailItem } from "../Lodash/EmailDasboard";
import { Email } from "@/types/EmailType";
function InboxEmail() {
  const { emails } = useSelector((state: RootState) => state.emailStore);
  return (
      <div className="w-full">
        {emails.map((email: Email, index: number) => (
          <EmailItem key={index} email={email}></EmailItem>
        ))}
      </div>
  );
}

export default InboxEmail;
