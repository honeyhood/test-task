import { Input } from '@mantine/core';
import { useState } from 'react';
import { notesSelectors, useAppSelector } from '../../store';

import { Note } from '../Note';

import styles from './notes.module.scss';
import { Props } from './Notes.types';

export const Notes = ({ notesPerPage, currentPage }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const notesList = useAppSelector(notesSelectors.list);

  const filteredNotes = notesList.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const paginatedNotes = filteredNotes.slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="Search notes"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className={styles.notes}>
        {paginatedNotes.map((item, index) => {
          return (
            <Note
              id={item.id}
              key={index}
              select={item.select}
              title={item.title}
              text={item.text}
              count={index + 1}
            />
          );
        })}
      </div>
    </>
  );
};
