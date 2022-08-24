import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({
    nombre: '',
    edad: '',
    carrera: '',
    hobbie: ''
  }) ;

  function handleInputChange(e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group w-25 mx-auto">
          <input onChange={e => handleInputChange(e)} type="text" name="nombre" className="form-control mt-2" placeholder=" Nombre"/>
          <input onChange={e => handleInputChange(e)} type="text" name="edad" className="form-control mt-2" placeholder=" Edad"/>
          <input onChange={e => handleInputChange(e)} type="text" name="carrera" className="form-control mt-2" placeholder=" Carrera"/>
          <input onChange={e => handleInputChange(e)} type="text" name="hobbie" className="form-control mt-2" placeholder=" Hobbie"/>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </div>
      </form>
    </div>
  )
}