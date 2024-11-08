// src/components/EventStatistics.tsx

import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const EventStatistics: React.FC = () => {
  // Obtenemos todos los eventos
  const events = useSelector((state: RootState) => state.events.events);

  // Función para contar eventos por mes
  const countEventsByMonth = () => {
    const counts: { [key: string]: number } = {};

    events.forEach(event => {
      const month = new Date(event.date).toLocaleString('default', { month: 'long' });
      counts[month] = (counts[month] || 0) + 1;
    });

    return {
      months: Object.keys(counts),
      eventCounts: Object.values(counts),
    };
  };

  // Datos para el gráfico
  const data = countEventsByMonth();

  return (
    <Plot
      data={[
        {
          x: data.months,
          y: data.eventCounts,
          type: 'bar',
          marker: { color: '#42a5f5' },
        },
      ]}
      layout={{ title: 'Eventos por Mes', xaxis: { title: 'Mes' }, yaxis: { title: 'Cantidad de Eventos' } }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default EventStatistics;
