import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import InboxMailContainer from '@/components/InboxMail/InboxMailContainer';

import EmailDetails from '@/components/Email/EmailDetails';

import LoginForm from '@/components/Login/LoginForm';
import routes from '@/config/routes';
import SearchContainer from '@/components/Search/SearchContainer';
import SearchResults from '@/components/Search/SearchResults';
import NewEmail from '@/components/Email/NewEmail';
import SortBy from '@/components/SortEmail/SortBy';


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
                element: <InboxMailContainer type="inbox" />,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: 'content',
                element: <InboxMailContainer type="inbox"></InboxMailContainer>,
                children: [
                    {
                        errorElement: <ErrorPage></ErrorPage>,
                        children: [
                            {
                                path: ':mailId',
                                element: <EmailDetails type="inbox" />,
                            },
                            {
                                path: 'newEmail',
                                element: <NewEmail></NewEmail>,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'send',
                element: <InboxMailContainer type="send"></InboxMailContainer>,
                children: [
                    {
                        errorElement: <ErrorPage></ErrorPage>,
                        children: [
                            {
                                path: ':mailId',
                                element: <EmailDetails type="send" />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'search',
                element: <SearchContainer></SearchContainer>,
                children: [
                    {
                        path: ':searchValue',
                        element: <SearchResults></SearchResults>,
                        // children:[

                        // ]
                    },
                    {
                        path: ':searchValue/:mailId',
                        element: <EmailDetails type="inbox"></EmailDetails>,
                    },
                ],
            },
            {
                path: 'sort',
                element: <SearchContainer></SearchContainer>,
                children: [
                    {
                        path: 'byTime',
                        element: <SortBy type="time"></SortBy>,
                        // children:[

                        // ]
                    },
                    {
                        path: 'byTime/:mailId',
                        element: <EmailDetails type="sort"></EmailDetails>,
                    },
                ],
            },
            {
                path: 'trash',
                element: <InboxMailContainer type="trash"></InboxMailContainer>,
                children: [
                    {
                        errorElement: <ErrorPage></ErrorPage>,
                        children: [
                            {
                                path: ':mailId',
                                element: <EmailDetails type="trash" />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
export default router;
