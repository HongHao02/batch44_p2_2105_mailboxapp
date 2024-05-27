import moment from 'moment';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { addActiveEmail, redoTrashEmail } from '@/features/emailStore/emailStoreSlice';
import ArchiveIcon from '@mui/icons-material/Archive';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import routes from '@/config/routes';
import { TrashEmail } from '@/types/EmailType';
import { useState } from 'react';
import Notification from '@/components/Notification/Notification';

interface TrashEmailItemProps {
    tEmail: TrashEmail;
}
export function TrashEmailItem({ tEmail }: TrashEmailItemProps) {
    const { activeMail } = useSelector((state: RootState) => state.emailStore);
    const dispatch: AppDispatch = useDispatch();
    const { email } = tEmail;
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
    const handleRedo = () => {
        dispatch(redoTrashEmail(tEmail));
        if (true) {
            handleShowAlert('Redo successful ', 'success');
        }
    };

    return (
        <Link to={`${routes.trashMail}/:${email.id}`}>
            <div
                className={`w-full flex p-2 gap-2  text-[12px] cursor-pointer hover:bg-white hover:border-b-[1px] hover:border-l-[1px] hover:shadow-md hover:rounded-sm group relative  ${
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
                        <IconButton>
                            <BookmarkAddIcon fontSize="small" color="action"></BookmarkAddIcon>
                        </IconButton>
                        <Tooltip placement="top" title="Redo to Inbox">
                            <IconButton onClick={handleRedo}>
                                <AccessAlarmsIcon fontSize="small" color="action"></AccessAlarmsIcon>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Link>
    );
}
