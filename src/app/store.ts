import { configureStore } from '@reduxjs/toolkit';

import emailStoreReducer from '@/features/emailStore/emailStoreSlice';
import emailSearchReducer from '@/features/searchMailStore/emailSearchSlice';

const store = configureStore({
    reducer: {
        emailStore: emailStoreReducer,
        emailSearchStore: emailSearchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;