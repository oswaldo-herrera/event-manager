import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addEvent, removeEvent } from '../redux/eventSlice';
import { Event } from '../redux/eventSlice';  // Importa el tipo Event del slice

const useEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events.events);

  const addNewEvent = (event: Event) => dispatch(addEvent(event));  // Usa el tipo correcto
  const deleteEvent = (id: string) => dispatch(removeEvent(id));

  return { events, addNewEvent, deleteEvent };
};

export default useEvents;
