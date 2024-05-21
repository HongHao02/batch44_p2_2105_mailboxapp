import { Email } from "@/types/EmailType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchEmailInitialState {
  s_emails: Email[];
  s_content: string;
  s_error: string | undefined | null;
  s_state: string | null;
}

const initialState: SearchEmailInitialState = {
  s_emails: [],
  s_error: null,
  s_state: null,
  s_content: "",
};

const emailSearchSlice = createSlice({
  name: "serchEmails",
  initialState,
  reducers: {
    addContent: (state, action: PayloadAction<string>) => {
      state.s_content = action.payload;
    },
    addSearchResults: (state, action: PayloadAction<Email[]>) => {
      state.s_emails = action.payload;
    },
    setSearchResultState: (
      state,
      action: PayloadAction<string>
    ) => {
      state.s_state = action.payload;
    },
  },
});

export const { addContent, addSearchResults, setSearchResultState } = emailSearchSlice.actions;

export default emailSearchSlice.reducer;
