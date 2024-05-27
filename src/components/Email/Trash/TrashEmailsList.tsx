import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';
import { TrashEmail } from '@/types/EmailType';
import { TrashEmailItem } from './TrashEmailItem';

function TrashEmailsList() {
    const {  trashEmails } = useSelector((state: RootState) => state.emailStore);
    return (
        <div className="w-full">
            {trashEmails.map((temail: TrashEmail, index: number) => (
                <TrashEmailItem key={index} tEmail={temail}></TrashEmailItem>
            ))}
        </div>
    );
}

export default TrashEmailsList;
