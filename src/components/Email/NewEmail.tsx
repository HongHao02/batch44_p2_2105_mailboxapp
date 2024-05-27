import { AppDispatch } from '@/app/store';
import { addSendEmail } from '@/features/emailStore/emailStoreSlice';
import { Email } from '@/types/EmailType';
import SendIcon from '@mui/icons-material/Send';
import { Button, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import Notification from '../Notification/Notification';

interface FormData {
    to: string,
    subject: string,
    content: string,
}
function NewEmail() {
    const [formData, setFormData] = useState<FormData>({ to: '', subject: '', content: '' })
    const dispatch: AppDispatch= useDispatch()

    
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationSeverity, setNotificationSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('success');

    const handleClick = (message: string, severity: 'success' | 'error' | 'warning' | 'info') => {
        setNotificationMessage(message);
        setNotificationSeverity(severity);
        setNotificationOpen(true);
    };

    const handleClose = () => {
        setNotificationOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formdata ', formData)
        const EmailTranform: Email={
            content: formData.content,
            from: {
                email: 'honghaocp@gmail.com',
                idUser: 999,
                name: "Hong Hao"
            },
            to: {
                email: formData.to,
                idUser: 333,
                name: "Jan Doe"
            },
            id: 1000 + moment().seconds(),
            subject:  formData.subject,
            time: moment().format('DD/MM/YYYY hh:mm:ss')
        }
        dispatch(addSendEmail(EmailTranform))
        if(EmailTranform){
            handleClick('Send email successful!', 'success')
            setFormData({content:'', to:'', subject:''})
        }

    }
    return (<div className="flex flex-col gap-1 h-full">
        <Notification
            open={notificationOpen}
            onClose={handleClose}
            message={notificationMessage}
            severity={notificationSeverity}
        />
        <div className="flex bg-slate-200 p-2 rounded-md font-bold">New Email</div>
        <form onSubmit={handleSubmit}>
            <div className="h-full">
                <div className="flex items-center gap-2 min-h-8 p-2">
                    <p className='font-bold'>To</p>
                    <input onChange={handleChange} value={formData.to} className="flex-1 appearance-none  rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-0 border-r-0" id="username" name='to' type="text" placeholder="Enter receiver email" />
                </div>
                <Divider></Divider>
                <div className="flex items-center gap-2 min-h-8 p-2">
                    {/* <p className='font-bold'>Subject</p> */}
                    <input onChange={handleChange} value={formData.subject} className="flex-1 appearance-none  rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-0 border-r-0" id="username" type="text" placeholder="Enter your subject" name='subject' />
                </div>
                <Divider></Divider>
                <div className="h-3/4 mt-2">
                    <TextField
                        value={formData.content}
                        onChange={handleChange}
                        name='content'
                        id="outlined-multiline-flexible"
                        multiline
                        minRows={11}
                        sx={{
                            width: '100%',
                            border: '0px'
                        }}
                    />
                </div>
                <div className='flex'>
                    <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </div>
            </div>
        </form>
    </div>);
}

export default NewEmail;