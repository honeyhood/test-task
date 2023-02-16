import { Container, Pagination } from '@mantine/core';
import { useState } from 'react';
import { notesSelectors, useAppSelector } from '../../store';

import { NoteInputs } from '../NoteInputs';
import { Notes } from '../Notes';

import styles from './app.module.scss';

export const App = () => {
  const [activePage, setPage] = useState(1);
  const notesList = useAppSelector(notesSelectors.list);
  const notesPerPage = 9;

  const totalPages = Math.ceil(notesList.length / notesPerPage);

  return (
    <Container className={styles.container}>
      <NoteInputs />
      <Notes notesPerPage={notesPerPage} currentPage={activePage} />
      <div className={styles.pagination}>
        <Pagination page={activePage} onChange={setPage} total={totalPages} />
      </div>
    </Container>
  );
};
