import { RootState } from '@/app/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Email } from '@/types/EmailType';
import Checkbox from '@mui/material/Checkbox';
import routes from '@/config/routes';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import moment from 'moment';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { IconButton } from '@mui/material';
import _ from 'lodash';
export function SearchEmailItem({ email, type }: { email: Email; type: 'time' | 'subject' }) {
    const [checked, setChecked] = useState<boolean>(false);

    const chooseLink = () => {
        switch (type) {
            case 'time':
                return `${routes.sortByTime}/:${email.id}`;
            default:
                return routes.home;
        }
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    //Reference for menu div
    return (
        <div className="flex gap-4 hover:border-b-[1px] hover:border-l-[1px] p-2 hover:shadow-md hover:rounded-sm group relative">
            <div className="flex justify-start">
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{
                        width: '10px',
                    }}
                />
            </div>
            <StarOutlineIcon
                sx={{
                    width: '18px',
                }}
            ></StarOutlineIcon>
            <div className="w-36">{email.from.name}</div>
            <Link to={chooseLink()}>
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <div>{email.subject} </div>
                        <div> - </div>
                        <div className="font-light"> {email.content.slice(0, 40)}...</div>
                    </div>
                    <div className="bg-slate-100 rounded-md flex justify-center items-center w-36 border-zinc-600">
                        Email Files
                    </div>
                </div>
            </Link>
            <div className="flex flex-1 justify-end ml-auto text-sm">
                {moment(email.time, 'DD/MM/YYYY hh:mm:ss', true).format('LL')}
            </div>
            <div className={`absolute right-0 top-0 z-[9999] w-40 hidden group-hover:block bg-white h-full`}>
                <div className="flex justify-center gap-1">
                    <IconButton>
                        <ArchiveIcon fontSize="small" color="action"></ArchiveIcon>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon fontSize="small" color="action"></DeleteIcon>
                    </IconButton>
                    <IconButton>
                        <BookmarkAddIcon fontSize="small" color="action"></BookmarkAddIcon>
                    </IconButton>

                    <IconButton>
                        <AccessAlarmsIcon fontSize="small" color="action"></AccessAlarmsIcon>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
interface SortByProps {
    type: 'time' | 'subject';
}

function SortBy({ type }: SortByProps) {
    const { emails } = useSelector((state: RootState) => state.emailStore);
    const [sortR, setSortR] = useState<Email[]>([]);

    useEffect(() => {
        switch (type) {
            case 'time':
                setSortR(_.sortBy(emails, (email: Email) => moment(email.time, 'DD/MM/YYYY hh:mm:ss')));
                break;
            default:
                setSortR(_.sortBy(emails, (email: Email) => moment(email.time, 'DD/MM/YYYY hh:mm:ss')));
                break;
        }
    }, []);

    return (
        <div className=" flex flex-col gap-y-2 h-full">
            {sortR.length == 0 && <div className="flex h-full justify-center items-center">"Not found"</div>}
            {sortR.map((email: Email, index: number) => (
                <SearchEmailItem key={index} email={email} type={type}></SearchEmailItem>
            ))}
        </div>
    );
}

export default SortBy;
