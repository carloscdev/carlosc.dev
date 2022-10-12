import React from 'react';
import { BaseButton } from '../Base';

export function ContactForm() {
  return (
    <>
      <h3 className="mb-5 text-xl font-semibold">Contáctame</h3>
      <form className="grid gap-3">
        <input type="text" placeholder="¿Cuál es tu nombre?" />
        <input type="text" placeholder="¿A que te dedicas?" />
        <select>
          <option value="1">Comentario</option>
          <option value="2">Sugerencia</option>
          <option value="3">Duda</option>
        </select>
        <textarea rows={3} placeholder="Ingresa tu mensaje" />
        <BaseButton value='Enviar' />
      </form>
    </>
  )
}
