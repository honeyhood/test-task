import { createAction } from '@reduxjs/toolkit';

export const addNote = createAction<{
  id: string;
  title: string;
  text: string;
  select: object[];
}>('notes/addNote');

export const updateNote = createAction<{
  id: string;
  title: string;
  text: string;
}>('notes/updateNote');

export const deleteNote = createAction<{
  id: string;
}>('notes/deleteNote');
