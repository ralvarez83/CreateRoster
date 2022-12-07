# CreateRoster

Esta aplicación permite, desde un fichero Excel 2007 en adelante (xlsx), crear un fichero Roster (csv)
con las restricciones de SAFe:
- No haya espacios en blanco antes y después de los valores de cada campo
- Estar en codificación UTF-8

Se crea un csv con los siguientes campos: 
    username
    first name
    last name
    attendee email
    attended
    attendee company

Para ello parte desde un fichero Excel que al menos tenga los siguientes campos:
    nombre
    apellidos
    email
    empresa

El orden de los campos es indifeente y si hay campos entre medias, antes o después también, la aplicación
detectará la posición de cada campo (sólo la primera aparición, si hay más de uno el segundo se ignorará)

INSTALACIÓN
---------------------
Es REQUISITO PREVIO tener instalada la versión de node 12.x (https://nodejs.org/dist/latest-v12.x/) se ha 
desarrollado con esta versión por lo que debería funcionar con futuras pero pueden surgir problemas. 

Para saber la versión de node instalada ejecutar en la línea de comandos: node -v 
Si es una versión superior avisar a Rubén.

Para instalar la manera cómoda de ejecutar se debe utilizar el comando:
Windows: Terminarl con modo Administrador
    nmp link

Linux / Mac:
    sudo npm link

UTILIZAR
---------------
Hay dos maneras, ambas desde la línea de comandos y desde la carpeta donde está la aplicación.

Si se ha instalado con los pasos anteriores:
    createroster nombreFichero

Si no se ha instalado:
    node index.js nombreFichero

No hay mucho control de errores, por lo que si todo va bien no debería de aparecer nada más que algo como
lo siguiente:
    Fichero a procesar:  examples/Roster.xlsx
    COLUMNAS DETECTADAS EN LAS POSICIONES:
            Nombre:  5
            Apellidos:  1
            Email:  2
            Empresa:  3
    ¡Roster creado!

Se creará en la carpeta de la aplicación un fichero llamado: roster.csv

Espero que sirva ;)

NOTAS: Si hay datos en alguna fila que no correcponde a un alumno puede dar un error de ejecución.