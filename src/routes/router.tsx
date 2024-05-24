import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import InboxMailContainer from "@/components/InboxMail/InboxMailContainer";

import EmailDetails from "@/components/Email/EmailDetails";

import LoginForm from "@/components/Login/LoginForm";
import routes from "@/config/routes";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.mailBox,
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <InboxMailContainer />,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "content",
        element: <InboxMailContainer></InboxMailContainer>,
        children: [
          {
            errorElement: <ErrorPage></ErrorPage>,
            children: [
              {
                path: ":mailId",
                element: <EmailDetails />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
export default router;
