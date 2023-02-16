import { createSlice } from '@reduxjs/toolkit';
import { addNote, updateNote, deleteNote } from './actions';
import { InitialState } from './types';

export const initialState: InitialState = {
  list: [],
};

export const slice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNote, (state, { payload }) => {
      state.list = [...state.list, payload];
    });
    builder.addCase(updateNote, (state, { payload }) => {
      state.list = state.list.map((note) => {
        if (note.id === payload.id) {
          return {
            ...note,
            title: payload.title,
            text: payload.text,
          };
        }
        return note;
      });
    });
    builder.addCase(deleteNote, (state, { payload }) => {
      state.list = state.list.filter((note) => note.id !== payload.id);
    });
  },
});
