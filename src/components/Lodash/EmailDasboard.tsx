import { Email, EmailType } from '@/types/EmailType';
import moment from 'moment';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { addActiveEmail, addTrashEmail } from '@/features/emailStore/emailStoreSlice';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import routes from '@/config/routes';
import { useState } from 'react';
import Notification from '../Notification/Notification';

interface EmailItemProps {
    email: Email;
    type: EmailType;
}
export function EmailItem({ email, type }: EmailItemProps) {
    const { activeMail } = useSelector((state: RootState) => state.emailStore);
    //Notification
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationSeverity, setNotificationSeverity] = useState<'success' | 'error' | 'warning' | 'info'>(
        'success',
    );
    const handleShowAlert = (message: string, severity: 'success' | 'error' | 'warning' | 'info') => {
        setNotificationMessage(message);
        setNotificationSeverity(severity);
        setNotificationOpen(true);
    };
    const handleClose = () => {
        setNotificationOpen(false);
    };
    const dispatch: AppDispatch = useDispatch();

    const handleMotoTrash = () => {
        dispatch(addTrashEmail(email));
        if (true) {
            handleShowAlert('Move to trash successful', 'success');
        }
    };
    return (
        <Link to={type == 'inbox' ? `${routes.mailContent}/:${email.id}` : `${routes.sendEmail}/:${email.id}`}>
            <div
                className={`w-full flex p-2 gap-2  text-[12px] cursor-pointer hover:bg-white hover:border-b-[1px] hover:border-l-[1px] hover:shadow-md hover:rounded-sm group relative ${
                    (activeMail?.id ?? 0) == email.id ? 'bg-white' : ''
                }`}
                onClick={() => dispatch(addActiveEmail(email))}
            >
                <Notification
                    open={notificationOpen}
                    onClose={handleClose}
                    message={notificationMessage}
                    severity={notificationSeverity}
                />
                <FiberManualRecordIcon color="disabled" fontSize="small"></FiberManualRecordIcon>
                <div className="flex-1">
                    <div className="flex">
                        <p>{email.from.name}</p>
                        <p className="flex justify-end ml-auto">
                            {moment(email.time, 'DD/MM/YYYY hh:mm:ss', true).format('LL')}
                        </p>
                    </div>
                    <div>{email.subject}</div>
                </div>
                <div className={`absolute right-0 top-0 z-[9999] w-40 hidden group-hover:block bg-inherit h-full`}>
                    <div className="flex justify-center gap-1">
                        <Tooltip placement="top" title="save">
                            <IconButton>
                                <ArchiveIcon fontSize="small" color="action"></ArchiveIcon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip placement="top" title="Move to Trash">
                            <IconButton onClick={handleMotoTrash}>
                                <DeleteIcon fontSize="small" color="action"></DeleteIcon>
                            </IconButton>
                        </Tooltip>
                        <IconButton>
                            <BookmarkAddIcon fontSize="small" color="action"></BookmarkAddIcon>
                        </IconButton>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function EmailDasboard() {
    const { activeMail, emails } = useSelector((state: RootState) => state.emailStore);
    return (
        <div className="flex gap-2">
            <div className="w-1/6 border-r-[1px] border-r-slate-200 p-2 rounded-sm">NavBar</div>
            <div className="w-2/6 border-x-[1px] border-r-slate-200 p-2">
                {emails.map((email: Email, index: number) => (
                    <EmailItem type="inbox" key={index} email={email}></EmailItem>
                ))}
            </div>
            <div className="w-3/6 border-x-[1px] border-r-slate-200 p-2">{activeMail?.content}</div>
        </div>
    );
}

export default EmailDasboard;
