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