import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
        <h1 className='title'>Cuentanos, ¿en que te podemos ayudar?</h1>

        <form className='form-contacto' action="mailto:jcar-95@hotmail.com" method='get'>
            <label htmlFor="email">Correo:</label>
            <input type="email" name="email" placeholder='Ingresa aqui tu correo'/>
            <input type="hidden" name="subject" value="Contacto happycake" />
            <label htmlFor="body">Descripcion:</label>
            <textarea name="body" placeholder='Ingresa la descripcion aqui'/>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
