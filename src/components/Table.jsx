import React from 'react';

const data = [
  {
    nombre: "Pedro",
    edad: 20,
    carrera: "Ingeniería",
    hobbie: "Futbol"
  },
  {
    nombre: "Rodrigo",
    edad: 22,
    carrera: "Arquitectura",
    hobbie: "Bajo eléctrico"
  },
  {
    nombre: "Romina",
    edad: 21,
    carrera: "Abogacía",
    hobbie: "Acrobacia"
  },
  {
    nombre: "Ana",
    edad: 23,
    carrera: "Coontadora",
    hobbie: "Astronomía"
  }
] 
export default function Table() {
  
  return (
    <div className='container table-lg p-4'>
      <table className='table table-bordered table-hover'>
        <thead className='thead-light'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Edad</th>
            <th scope='col'>Carrera</th>
            <th scope='col'>Hobbie</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((e, i) => (
              <tr key={i}>
                <th scope='row'>{i+1}</th>
                <td>{e.nombre}</td>
                <td>{e.edad}</td>
                <td>{e.carrera}</td>
                <td>{e.hobbie}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}