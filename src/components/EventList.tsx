import React from 'react';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const EventList: React.FC = () => {
  const events = useSelector((state: RootState) => state.events.events);

  return (
    <div>
      <Button variant="contained" color="primary">
        Agregar Evento
      </Button>
      <List>
        {events.map(event => (
          <ListItem key={event.id}>
            <ListItemText primary={event.name} secondary={`${event.date} ${event.time}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EventList;
