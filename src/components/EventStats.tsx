import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const EventStats: React.FC = () => {
  const events = useSelector((state: RootState) => state.events.events);
  const eventsPerMonth = events.reduce((acc: Record<string, number>, event) => {
    const month = new Date(event.date).toLocaleString('default', { month: 'long' });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  return (
    <Plot
      data={[
        {
          x: Object.keys(eventsPerMonth),
          y: Object.values(eventsPerMonth),
          type: 'bar',
        },
      ]}
      layout={{ title: 'Eventos por Mes' }}
    />
  );
};

export default EventStats;
