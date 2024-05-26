import { AppDispatch, RootState } from "@/app/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from 'lodash'
import { Email } from "@/types/EmailType";
import { addSearchContent, addSearchResults, setSearchResultState } from "@/features/searchMailStore/emailSearchSlice";
import Checkbox from '@mui/material/Checkbox';

import routes from "@/config/routes";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import moment from "moment";
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { IconButton } from "@mui/material";
export function SearchEmailItem({ email, searchValue }: { email: Email, searchValue: string }) {
    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    //Reference for menu div
    return (<div className="flex gap-4 hover:border-b-[1px] hover:border-l-[1px] p-2 hover:shadow-md hover:rounded-sm group relative">
        <div className="flex justify-start">
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{
                    width: '10px'
                }}
            />
        </div>
        <StarOutlineIcon sx={{
            width: '18px'
        }}></StarOutlineIcon>
        <div className="w-36">
            {email.from.name}
        </div>
        <Link to={`${routes.mailSearch}/:${searchValue}/:${email.id}`}>
            <div className="flex flex-col">
                <div className="flex gap-2">
                    <div>{email.subject} </div>
                    <div> - </div>
                    <div className="font-light"> {email.content.slice(0, 50)}...</div>
                </div>
                <div className="bg-slate-100 rounded-md flex justify-center items-center w-36 border-zinc-600">
                    Email Files
                </div>
            </div>
        </Link>
        <div className="flex flex-1 justify-end ml-auto">
            {moment(email.time, "DD/MM/YYYY hh:mm:ss", true).format("LL")}
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
    </div >
    );
    // return (
    //     <div className="group relative inline-block">
    //         {/* Div chính */}
    //         <div className="p-4 bg-blue-500 text-white">
    //             Hover vào đây
    //         </div>
    //         {/* Menu ẩn */}
    //         <div className="absolute left-0 top-full w-48 p-2 bg-white border border-gray-200 shadow-lg hidden group-hover:block">
    //             <ul className="flex z-40">
    //                 <li className="p-2 hover:bg-gray-100">Menu Item 1</li>
    //                 <li className="p-2 hover:bg-gray-100">Menu Item 2</li>
    //                 <li className="p-2 hover:bg-gray-100">Menu Item 3</li>
    //             </ul>
    //         </div>
    //     </div>
    // )
}



function SearchResults() {
    const { searchValue } = useParams()
    const searchValueFormat = searchValue?.slice(1, searchValue.length)
    console.log("searchValue ", searchValueFormat);


    const { s_emails, s_state } = useSelector((state: RootState) => state.emailSearchStore)
    const { emails } = useSelector((state: RootState) => state.emailStore)
    const dispatch: AppDispatch = useDispatch()


    useEffect(() => {
        if (searchValueFormat) {
            console.log("emails ", emails);
            const results: Email[] = _.filter(emails, (email: Email) => email.content.includes(searchValueFormat) || email.subject.includes(searchValueFormat) || email.from.email.includes(searchValueFormat) || email.from.name.includes(searchValueFormat))
            console.log('searchResult ', results);

            dispatch(addSearchContent(searchValueFormat))
            if (results.length > 0) {
                dispatch(addSearchResults(results))
                dispatch(setSearchResultState(null))
            } else {
                dispatch(setSearchResultState("Can not find any emails!"))
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className=" flex flex-col gap-y-2 h-full">
            {s_state && <div className="flex h-full justify-center items-center">{s_state}</div>}
            {s_emails.map((email: Email, index: number) => (
                <SearchEmailItem key={index} email={email} searchValue={searchValueFormat ? searchValueFormat : ''}></SearchEmailItem>
            ))}
        </div>
    );
}

export default SearchResults;