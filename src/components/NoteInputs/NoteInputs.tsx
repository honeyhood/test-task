import { Input, Button } from '@mantine/core';
import { useForm, SubmitHandler } from 'react-hook-form';

import { addNote, useAppDispatch } from '../../store';

import { Inputs } from './NoteInputs.types';

import styles from './noteInputs.module.scss';
import { v4 as uuidv4 } from 'uuid';

export const NoteInputs = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const id = uuidv4();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { text, title, select } = data;
    dispatch(addNote({ id, text, title, select }));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={styles.input}
        placeholder="Title"
        {...register('title', { required: true })}
      />
      <Input
        className={styles.input}
        placeholder="Text"
        {...register('text', { required: true })}
      />
      <select
        className={styles.select}
        {...register('select', { required: true })}
      >
        <option value="important">Важная задача</option>
        <option value="usual">Обычная задача</option>
      </select>
      <Button type="submit">Submit</Button>
    </form>
  );
};
