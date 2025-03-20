// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import db from "../db";
import "./TablaEdicion.css";

function TablaEdicion() {
  const [personas, setPersonas] = useState([]);
  const [encabezado, setEncabezado] = useState(
    "Recaudación semanal para mantenimiento del sanitario."
  );
  const [recaudador, setRecaudador] = useState(
    "Recauda: JoyBoy."
  );
  const [semana, setSemana] = useState("Semana del: ");

  useEffect(() => {
    async function fetchPersonas() {
      try {
        const data = await db.personas.toArray();
        setPersonas(data);
        const header = await db.encabezado.get(1);
        if (header) {
          setEncabezado(header.texto);
        }
        const header2 = await db.recaudador.get(1);
        if (header2) {
          setRecaudador(header2.texto);
        }
        const header3 = await db.semana.get(1);
        if (header3) {
          setSemana(header3.texto);
        }
      } catch (error) {
        console.error(
          "Error al obtener los datos de la tabla de Dexie:",
          error
        );
      }
    }

    fetchPersonas();
  }, []);

  const handleInputChange = (event, index, field) => {
    const value =
      field === "estado" ? parseInt(event.target.value) : event.target.value;
    const updatedPersonas = [...personas];
    updatedPersonas[index][field] = value;
    setPersonas(updatedPersonas);
  };

  const handleEncabezadoChange = async (event) => {
    const texto = event.target.value;
    setEncabezado(texto);

    try {
      await db.encabezado.clear();
      await db.encabezado.put({ id: 1, texto });
      console.log("Encabezado guardado en la tabla de Dexie");
    } catch (error) {
      console.error(
        "Error al guardar el encabezado en la tabla de Dexie:",
        error
      );
    }
  };

  const handleEncabezado2Change = async (event) => {
    const texto = event.target.value;
    setRecaudador(texto);

    try {
      await db.recaudador.clear();
      await db.recaudador.put({ id: 1, texto });
      console.log("Encabezado guardado en la tabla de Dexie");
    } catch (error) {
      console.error(
        "Error al guardar el encabezado en la tabla de Dexie:",
        error
      );
    }
  };

  const handleEncabezado3Change = async (event) => {
    const texto = event.target.value;
    setSemana(texto);

    try {
      await db.semana.clear();
      await db.semana.put({ id: 1, texto });
      console.log("Encabezado guardado en la tabla de Dexie");
    } catch (error) {
      console.error(
        "Error al guardar el encabezado en la tabla de Dexie:",
        error
      );
    }
  };


  const handleDelete = (index) => {
    const updatedPersonas = [...personas];
    updatedPersonas.splice(index, 1);
    setPersonas(updatedPersonas);
  };

  const handleSave = async () => {
    try {
      await db.personas.clear();
      await db.personas.bulkAdd(personas);
      console.log("Datos guardados en la tabla de Dexie");
    } catch (error) {
      console.error("Error al guardar los datos en la tabla de Dexie:", error);
    }
  };

  return (
    <div>

<div style={{ width: "98%", margin: "0 auto" }}>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ fontSize: "10px", backgroundColor: "#F41010" }}>
                  0: Fuera de servicio.
                </td>
                <td style={{ fontSize: "10px", backgroundColor: "#AAFF00" }}>
                  1: Planta.
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "10px", backgroundColor: "#EFEF0F" }}>
                  2: Taller.
                </td>
                <td style={{ fontSize: "10px", backgroundColor: "#FF8503" }}>
                  5: Posturero.
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td style={{ fontSize: "10px", backgroundColor: "white" }}>
                  6: No se le pidio.
                </td>
                <td
                  style={{
                    fontSize: "10px",
                    backgroundColor: "#000000",
                    color: "red",
                  }}
                >
                  7: Debe 2 semanas ($30).
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "10px",
                    backgroundColor: "#000000",
                    color: "yellow",
                  }}
                >
                  8: Debe 1 semana ($15).
                </td>
                <td style={{ fontSize: "10px", backgroundColor: "white" }}></td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      <br></br>
      <div className="container-encabezado">
        <label htmlFor="encabezadoInput"></label>
        <textarea
          className="input-encabezado"
          id="encabezadoInput"
          value={encabezado}
          onChange={handleEncabezadoChange}
          rows={3} // Puedes ajustar el número de filas según tus necesidades
        />
      </div>
      <div className="container-encabezado2">
        <label htmlFor="recaudadorInput"></label>
        <input
          className="input-recaudador"
          id="recaudadorInput"
          value={recaudador}
          onChange={handleEncabezado2Change}
        />
      </div>
      <div className="container-encabezado3">
        <label htmlFor="semanaInput"></label>
        <input
          className="input-semana"
          id="semanaInput"
          value={semana}
          onChange={handleEncabezado3Change}
        />
      </div>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            {/* Tabla de leyenda */}
            {/* ... (omitido por brevedad) */}
          </tbody>
        </table>
      </div>
      <hr></hr>
      <table>
        <thead>
          {/* Encabezado de la tabla */}
          {/* ... (omitido por brevedad) */}
        </thead>
        <tbody>
          {personas.map((persona, index) => (
            <tr key={persona.unidad}>
              <td>{persona.unidad}</td>
              <td>
                <input
                  className="input-nombre"
                  type="text"
                  value={persona.nombre}
                  onChange={(e) => handleInputChange(e, index, "nombre")}
                />
              </td>
              <td>
                <input
                  className="input-cooperacion"
                  type="number"
                  value={persona.cooperacion}
                  onChange={(e) => handleInputChange(e, index, "cooperacion")}
                />
              </td>
              <td>
                <input
                  className="input-cooperacion"
                  type="number"
                  value={persona.estado}
                  onChange={(e) => handleInputChange(e, index, "estado")}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleSave}>Guardar cambios</button>
      </div>
    </div>
  );
}

export default TablaEdicion;
