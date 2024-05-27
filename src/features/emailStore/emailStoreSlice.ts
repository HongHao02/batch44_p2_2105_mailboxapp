import { Email, TrashEmail } from '@/types/EmailType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

interface EmailStoreInitialState {
    emails: Email[];
    activeMail: Email | null;
    error: string | undefined | null;
    state: 'pending' | 'fulfilled' | 'rejected' | 'none';
    sendEmails: Email[];
    trashEmails: TrashEmail[];
}

const initialState: EmailStoreInitialState = {
    emails: [],
    activeMail: null,
    error: null,
    state: 'none',
    sendEmails: [],
    trashEmails: [],
};

const emailStoreSlice = createSlice({
    name: 'emailStore',
    initialState,
    reducers: {
        addActiveEmail: (state, action: PayloadAction<Email>) => {
            state.activeMail = action.payload;
        },
        addEmails: (state, action: PayloadAction<Email[]>) => {
            state.emails = action.payload;
        },
        addFakeSendEmails: (state, action: PayloadAction<Email[]>) => {
            state.sendEmails = [...state.sendEmails, ...action.payload];
        },
        addSendEmail: (state, action: PayloadAction<Email>) => {
            state.sendEmails = [...state.sendEmails, action.payload];
        },
        addTrashEmail: (state, action: PayloadAction<Email>) => {
            //find index's email by `lodash`
            const TrashTranform: TrashEmail = {
                index: _.findIndex(state.emails, (email: Email) => email.id === action.payload.id),
                email: action.payload,
            };
            state.trashEmails.push(TrashTranform);
            state.emails = state.emails.filter((email: Email) => email.id != action.payload.id);
        },
        redoTrashEmail: (state, action: PayloadAction<TrashEmail>) => {
            state.trashEmails = state.trashEmails.filter((tEmail: TrashEmail) => tEmail.email.id != action.payload.email.id);
            // insertAt(state.emails, action.payload.index, action.payload.email);
            state.emails.splice(action.payload.index,0,action.payload.email)
        },
    },
});

export const { addActiveEmail, addEmails, addSendEmail, addFakeSendEmails, addTrashEmail, redoTrashEmail } =
    emailStoreSlice.actions;

export default emailStoreSlice.reducer;
