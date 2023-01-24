#!/usr/bin/env node
const xlsxFile = require('read-excel-file/node');
const fs = require('fs');

var csv = "username,first name,last name,attendee email,attended,attendee company";
var posicionesColumnas = {nombre:0, apellidos:0,email:0, empresa:0};
var fileName = process.argv.slice(2)[0];

console.log("Fichero a procesar: ", fileName);

if (fileName.toLowerCase() == "ayuda"){
    console.log("Aquí está: las columnas del Excel deben ser (Nombre, Apellidos, Email, Empresa)");
    return;
}

var rowPos = 0;
xlsxFile(fileName).then((rows) => {
    for (colPos in rows[0]){
        switch (rows[0][colPos]) {
            case "Nombre":
                posicionesColumnas.nombre = colPos;
                break;
            case "Apellidos":
                posicionesColumnas.apellidos = colPos;
                break;
            case "Email":
                posicionesColumnas.email = colPos;
                break;
            case "Empresa":
                posicionesColumnas.empresa = colPos;
                break;                
            default:
                break;
        }
    }
    
    console.log("COLUMNAS DETECTADAS EN LAS POSICIONES:")
    console.log("\tNombre: ", posicionesColumnas.nombre);
    console.log("\tApellidos: ", posicionesColumnas.apellidos);
    console.log("\tEmail: ", posicionesColumnas.email);
    console.log("\tEmpresa: ", posicionesColumnas.empresa);

    for (i in rows){
        if (i > 0){
            csv = csv.concat("\n").concat(rows[i][posicionesColumnas.email].trim() + "," + rows[i][posicionesColumnas.nombre].trim() + "," + rows[i][posicionesColumnas.apellidos].trim() + "," + rows[i][posicionesColumnas.email].trim() + ",-," + rows[i][posicionesColumnas.empresa].trim())
        }
    }

    const fileData = new Uint8Array(Buffer.from(csv));
    fs.writeFile("roster.csv", fileData, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("¡Roster creado!");
    }); 
});