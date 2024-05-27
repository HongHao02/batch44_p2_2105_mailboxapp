import { RouterProvider } from 'react-router-dom';
import './App.css';
import { fakeEmails, fakeSendEmails } from '@/data/Email';
import { AppDispatch, RootState } from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addEmails, addFakeSendEmails } from '@/features/emailStore/emailStoreSlice';

import router from './routes/router';
function App() {
    const { trashEmails, emails } = useSelector((state: RootState) => state.emailStore);
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(addEmails(fakeEmails));
        dispatch(addFakeSendEmails(fakeSendEmails));
    }, []);

    useEffect(()=>{
        console.log("emailStore ", emails);
        console.log("trashMailStore ", trashEmails);
    }, [dispatch])
    return <RouterProvider router={router} />;
}

export default App;
