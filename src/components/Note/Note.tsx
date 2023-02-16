import { FC, useState } from 'react';
import { Badge, Button, Card, Group, Text } from '@mantine/core';

import { Props } from './Note.types';
import { ModalWindow } from '../UI/Modal';
import { EditNoteInputs } from '../EditNoteInputs';
import { useAppDispatch } from '../../store/hooks';
import { deleteNote } from '../../store';

export const Note: FC<Props> = ({ id, text, count, title, select }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteNote({ id }));
  };

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{title}</Text>
          <Badge color="blue" variant="light">
            {select}
          </Badge>
          <Badge color="pink" variant="light">
            {count}
          </Badge>
        </Group>
        <Text size="sm" color="dimmed">
          {text}
        </Text>
        <Group position="apart" mt="lg" mb="xs">
          <ModalWindow
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            modalButtonText="Edit"
          >
            <EditNoteInputs setModalOpen={setModalOpen} id={id} />
          </ModalWindow>
          <Button onClick={handleDelete} radius="xl" size="sm">
            Delete
          </Button>
        </Group>
      </Card>
    </>
  );
};
