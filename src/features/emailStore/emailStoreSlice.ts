import { Email } from "@/types/EmailType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmailStoreInitialState {
  emails: Email[];
  activeMail: Email | null;
  error: string | undefined | null;
  state: "pending" | "fulfilled" | "rejected" | "none";
}

const initialState: EmailStoreInitialState = {
  emails: [],
  activeMail: null,
  error: null,
  state: "none",
};

const emailStoreSlice = createSlice({
  name: "emailStore",
  initialState,
  reducers: {
    addActiveEmail: (state, action: PayloadAction<Email>) => {
      state.activeMail = action.payload;
    },
    addEmails: (state, action: PayloadAction<Email[]>)=>{
        state.emails= action.payload;
    }
  },
});

export const { addActiveEmail, addEmails } = emailStoreSlice.actions;

export default emailStoreSlice.reducer;
