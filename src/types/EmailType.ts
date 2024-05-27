export interface User{
    idUser: number,
    email: string,
    name: string,
}

export interface Email{
    id: number,
    from: User,
    to: User,
    subject: string,
    content: string,
    time: string,
}


export type EmailType="inbox"|"send"|"drafts"|"sort"|"trash"
export interface TrashEmail{
    index: number,
    email: Email,
    checkTrash?: ()=>true
}

export function isTrashMail(email: Email | TrashEmail): email is TrashEmail{
    return (email as TrashEmail).checkTrash !== undefined
}