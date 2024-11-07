import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, removeEvent } from './redux/eventSlice'; 
import { RootState } from './redux/store'; 
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,Box, ThemeProvider, Typography, createTheme, Grid ,Card,CardContent,CardActions,Divider} from '@mui/material'; 
import EventStatistics from './components/EventStatistics';
import "@fontsource/raleway"; 


function App() {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events.events);

  // Estados locales para manejar el formulario
  const [open, setOpen] = React.useState(false);
  const [statsOpen, setStatsOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Función para abrir el formulario
  const handleOpen = () => setOpen(true);
  // Función para cerrar el formulario
  const handleClose = () => setOpen(false);

   // Función para abrir el modal de estadísticas
   const handleStatsOpen = () => setStatsOpen(true);
   // Función para cerrar el modal de estadísticas
   const handleStatsClose = () => setStatsOpen(false);
  

  // Función para agregar evento
  const handleAddEvent = () => {
    if (name && date && time && description) {
      const newEvent = { id: Date.now().toString(), name, date, time, description };
      dispatch(addEvent(newEvent));
      handleClose();
    }
  };

  

  

  return (
    <div className="App">
      <header className="App-header">
      
        <h1 >Gestión de Eventos</h1>
        <Box display="flex" alignItems="center">
          {/* Botón para abrir el formulario */}
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Agregar Evento
          </Button>

          {/* Botón para abrir el modal de estadísticas */}
          <Button variant="contained" color="secondary" onClick={handleStatsOpen} style={{ marginLeft: '10px' }}>
            Ver Estadísticas
          </Button>
        </Box>

        {/* Lista de eventos */}
        <div>
      {events.length > 0 ? (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {events.map((event) => (
            <Grid item xs={12}  sm={events.length === 1 ? 12 : 6} md={events.length === 1 ? 12 : 6}  key={event.id}  >
              <Card
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '15px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  marginTop: '20px',
                  color:'white',
                  maxWidth: '400px', 
                  maxHeight: '250px', 
                  textAlign:'center'
                 
                  
                  
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ textTransform: 'uppercase' }}>
                    {event.name}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography color="white" sx={{ textTransform: 'uppercase' }}>
                    Fecha: {event.date} 
                  </Typography>
                  <Typography color="white" sx={{ textTransform: 'uppercase' }}>
                    Hora: {event.time}
                  </Typography>
                  
                  <Typography variant="body2" component="p" sx={{ textTransform: 'uppercase' }}>
                    Especificaciones: {event.description}
                  </Typography>
                  
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="warning"
                    onClick={() => dispatch(removeEvent(event.id))}
                  >
                    Eliminar
                  </Button>
                </CardActions>
                <Divider sx={{ my: 2 }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No hay eventos.</p>
      )}
    </div>

         

        {/* Formulario Modal para agregar evento */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Agregar Evento</DialogTitle>
          <DialogContent>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre del evento"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              label="Fecha"
              type="date"
              fullWidth
              margin="normal"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              label="Hora"
              type="time"
              fullWidth
              margin="normal"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              label="Descripción"
              fullWidth
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button variant="contained" onClick={handleAddEvent} color="secondary">
              Agregar
            </Button>
          </DialogActions>
        </Dialog>

        {/* Modal para ver estadísticas */}
        <Dialog open={statsOpen} onClose={handleStatsClose} maxWidth="md" fullWidth>
          <DialogTitle>Estadísticas de Eventos</DialogTitle>
          <DialogContent>
            <EventStatistics />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleStatsClose} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </header>

      
    </div>
  );
}

export default App;
