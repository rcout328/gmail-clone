import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Assuming fetchCount is a function that makes an asynchronous request
const fetchCount = async (amount) => {
  // Your asynchronous logic here (e.g., making an API call)
  const response = await fetch('https://example.com/api/count', {
    method: 'POST',
    body: JSON.stringify({ amount }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch count');
  }

  const data = await response.json();
  return data;
};

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchcount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageisOpen: false,
  status: 'idle',
  },

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageisOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageisOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { openSendMessage,closeSendMessage } = mailSlice.actions;

export const selectSendMessageOpen = (state) => state.mail.sendMessageisOpen;

export default mailSlice.reducer;
