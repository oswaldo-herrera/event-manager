import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
}

interface EventState {
  events: Event[];
}

const initialState: EventState = { events: [] };

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    removeEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(event => event.id !== action.payload);
    }
  },
});

export const { addEvent, removeEvent } = eventSlice.actions;
export default eventSlice.reducer;
