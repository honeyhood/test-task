import { Input, Button, TextInput } from '@mantine/core';
import { useForm, SubmitHandler } from 'react-hook-form';

import { updateNote, useAppDispatch } from '../../store';

import { EditInputs, Props } from './EditNoteInputs.types';

import styles from './editNoteInputs.module.scss';

export const EditNoteInputs = ({ id, setModalOpen }: Props) => {
  const { register, handleSubmit, reset } = useForm<EditInputs>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<EditInputs> = (data) => {
    const { text, title } = data;

    dispatch(updateNote({ id, text, title }));
    reset();
    setModalOpen(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        className={styles.input}
        label="Title"
        placeholder="Updated title"
        {...register('title', { required: true })}
      />
      <TextInput
        className={styles.input}
        label="Text"
        placeholder="Updated text"
        {...register('text', { required: true })}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
