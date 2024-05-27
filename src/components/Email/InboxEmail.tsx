import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';
import { EmailItem } from '../Lodash/EmailDasboard';
import { Email, EmailType} from '@/types/EmailType';

// type EmailType = 'inbox' | 'send' | 'drafts' | 'sort' | 'trash';
interface InboxEmailProps {
    type: EmailType;
}
type EmailSource = Email[];
interface RenderProps<T extends EmailType, S extends EmailSource> {
    type: T;
    source: S;
}

function InboxEmail({ type }: InboxEmailProps) {
    const { emails, sendEmails} = useSelector((state: RootState) => state.emailStore);
    const chooseProps = ({ type }: InboxEmailProps): RenderProps<EmailType, EmailSource> | undefined => {
        switch (type) {
            case 'inbox':
                return { type, source: emails };
            case 'send':
                return { type, source: sendEmails };
            // case 'trash':
            //     return { type, source: trashEmails };
            default:
                return undefined;
        }
    };
    const renderItem = () => {
        const render = chooseProps({ type });
        // if(render?.type=="trash"){
        //     const source: TrashEmail[]= render.source;
        // }
        return (
            <>
                {render?.source.map((email: Email, index: number) => (
                    <EmailItem type={type} key={index} email={email}></EmailItem>
                ))}
            </>
        );
    };

    return <div className="w-full">{renderItem()}</div>;
}

export default InboxEmail;
