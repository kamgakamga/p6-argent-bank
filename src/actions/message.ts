import { createSlice } from '@reduxjs/toolkit';

interface MessageState {
  message: string;
}

interface SetMessagePayload {
  message: string;
}

const initialState: MessageState = {
  message: '',
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state: MessageState, action: { payload: SetMessagePayload }) => {
      state.message = action.payload.message;
    },
    clearMessage: (state: MessageState) => {
      state.message = "";
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setMessage, clearMessage } = actions;
export default reducer;
