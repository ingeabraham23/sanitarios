import Dexie from "dexie";

const database = new Dexie("DatosSanitarios");
database.version(1).stores({
  personas: "++id, unidad, nombre, cooperacion, estado",
  encabezado: "++id, texto",
  recaudador: "++id, texto"
});

export default database;