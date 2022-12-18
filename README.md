Descripción del contenido de los directorios:

-MySQL-> Contiene scripts para crear la base de datos

Practica5_Client-> Aplicacion cliente
    app-> Directorio raiz de la aplicacion
        Enum-> Contiene enumeradores que utiliza la aplicacion
            Rest_URL.js-> Los URLs de la REST API que utiliza la aplicacion
        lib-> Las librerias de la aplicacion
        Views-> Contiene todas las vistas de la aplicacion
            BuscarImagen-> Vista y controlador para buscar una imagen
            EliminarImagen-> Vista y controlador para eliminar una imagen
            Error-> Vista y controlador para errores
            Home-> Vista y controlador para la vista principal
            ListarImagenes-> Vista y controlador para listar imagenes
            Login-> Vista y controlador del login y el registro de usuarios
            LogOut-> Vista y controlador para salir de la aplicacion
            ModificarImagen-> Vista y controlador para modificar una imagen
            RegistrarImagen-> Vista y controlador para registrar una imagen
        app.css-> El estilo de la aplicacion
        app.js-> Configuraciones de angular para la aplicacion
        index.html-> Importancion de todos los scripts que utiliza la plicacion y el menu de la aplicacion
    node_modules-> Librerias que utiliza la aplicacion

Practica5_ServiceWeb-> Aplicacion REST API
    bin-> Script para iniciar el servidor
    Config-> 
    middleware-> Contiene los middleware
        upload.js-> middleware para subida de ficheros
    Models-> Modelos utilizados 
    node_modules-> Librerias que utiliza la aplicacion
    routes-> Definicion de las operaciones REST
    services-> Controladores de la base de datos
    views-> Las vistas en caso de error (generado automaticamente)
    app.js-> Configuraciones de node y express para la aplicacion
