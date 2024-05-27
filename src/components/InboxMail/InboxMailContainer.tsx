import React from 'react';

import InboxEmail from '../Email/InboxEmail';
import { Outlet } from 'react-router-dom';
import { EmailType } from '@/types/EmailType';
import TrashEmailsList from '../Email/Trash/TrashEmailsList';

interface InboxMailContainerProps {
    type: EmailType;
}

const InboxMailContainer: React.FC<InboxMailContainerProps> = ({ type }) => {
    return (
        <div className="flex gap-2 h-full">
            <div className="w-2/5 bg-slate-100 shadow-lg hidden md:block rounded-md">
                {type != 'trash' ? <InboxEmail type={type}></InboxEmail> : <TrashEmailsList></TrashEmailsList>}
            </div>
            <div className="flex-1 w-3/5 p-2 h-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default InboxMailContainer;
