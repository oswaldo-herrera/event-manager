import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/eventSlice';

interface EventFormValues {
  name: string;
  date: string;
  time: string;
  description: string;
}

const EventFormSchema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
  date: Yup.date().min(new Date(), 'No se permiten fechas pasadas').required('Requerido'),
  time: Yup.string().required('Requerido'),
  description: Yup.string(),
});

const EventForm: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues: EventFormValues = { name: '', date: '', time: '', description: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EventFormSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addEvent({ ...values, id: String(Date.now()) }));
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" as={TextField} label="Nombre" error={touched.name && Boolean(errors.name)} helperText={touched.name && errors.name} />
          <Field name="date" as={TextField} type="date" label="Fecha" error={touched.date && Boolean(errors.date)} helperText={touched.date && errors.date} />
          <Field name="time" as={TextField} type="time" label="Hora" error={touched.time && Boolean(errors.time)} helperText={touched.time && errors.time} />
          <Field name="description" as={TextField} label="Descripción" multiline rows={4} />
          <Button type="submit" variant="contained" color="primary">Agregar Evento</Button>
        </Form>
      )}
    </Formik>
  );
};

export default EventForm;
