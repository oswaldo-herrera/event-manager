________________________________________
Event Manager
Descripción
Event Manager es una aplicación de gestión de eventos construida con React y TypeScript. Su objetivo es permitir a los usuarios crear, visualizar y gestionar eventos de manera fácil e intuitiva. La aplicación hace uso de Material-UI para una interfaz moderna y componentes reutilizables, Formik y Yup para la validación de formularios, y Redux para la gestión del estado global de los eventos.

Tecnologías y Librerías Utilizadas
•	React: Para la creación de la interfaz de usuario.
•	TypeScript: Para tipado estático y mejorar la mantenibilidad del código.
•	Material-UI: Componentes de UI para crear una interfaz limpia y funcional.
•	Formik: Para la gestión de formularios.
•	Yup: Para la validación de los datos del formulario.
•	Redux: Para la gestión del estado global de la lista de eventos.
•	Plotly: Para visualizar estadísticas relevantes de los eventos.
•	Custom Hooks: Un hook personalizado useEvents para manejar las operaciones relacionadas con los eventos.

Funcionalidades
•	Visualización de Eventos: En la página principal, los usuarios pueden ver una lista de eventos.
•	Agregar Evento: Los usuarios pueden añadir nuevos eventos mediante un formulario modal.
•	Validación de Formularios: Utiliza Formik para la gestión de formularios 
•	Gestión de Estado con Redux: La aplicación usa Redux para manejar el estado global, incluyendo la lista de eventos y el estado del formulario.
•	Visualización de Datos: Un gráfico que muestra estadísticas relevantes (ej., cantidad de eventos por mes) usando Plotly.

Instrucciones de Instalación y Ejecución
1.	Clona el repositorio:
git clone https://github.com/usuario/event-manager.git
cd event-manager
2.	Instala las dependencias:
npm install
3.	Ejecuta la aplicación en modo de desarrollo:
npm start
La aplicación estará disponible en http://localhost:3000.
Uso de la Aplicación
1.	Inicio: La página principal muestra la lista de eventos actuales y un botón "Agregar Evento".
2.	Agregar Evento: Haz clic en el botón para abrir el formulario modal, donde puedes ingresar:
o	Nombre del evento
o	Fecha y hora (con validación para evitar fechas pasadas)
o	Descripción
3.	Eliminar Evento: Cada evento listado incluye un botón para eliminarlo de la lista.
4.	Gráficas: Haz clic en el botón para abrir ver estadísticas, puedes ver un gráfico que muestra la cantidad de eventos por mes.

Estructura del Proyecto
•	src/components: Contiene los componentes de la aplicación, como el formulario y la lista de eventos.
•	src/redux: Incluye la configuración de Redux para la gestión de estado de eventos.
•	src/hooks: Contiene hooks personalizados, como useEvents para manejar eventos.
•	src/pages: Páginas principales de la aplicación.
•	src/App.tsx: Configuración y enrutamiento principal de la aplicación.

Futuras Mejoras
1.	Optimización de Gráficas: Mejorar la interactividad y claridad de las gráficas en función de los datos.
2.	Soporte para Mapa Completo: Añadir opciones para geolocalización completa en el mapa y permitir al usuario seleccionar la ubicación de un evento.
3.	Filtro de Eventos: Implementar filtros avanzados para ver eventos por categoría, fecha, etc.
4.	Mejoras en la Interfaz: Mejorar el diseño de la interfaz para una experiencia de usuario más fluida.

Contribuciones
Las contribuciones son bienvenidas. Si tienes ideas o mejoras, siéntete libre de crear una rama y hacer una solicitud de extracción.

