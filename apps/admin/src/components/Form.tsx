import React from 'react'

export const Form = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
      {/* Campo: Nombre */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Nombre del producto</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Ej. Polera blanca"
          required
        />
        <p className="label">Nombre que se mostrará al cliente</p>
      </fieldset>

      {/* Campo: Precio */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Precio</legend>
        <input
          type="number"
          className="input w-full"
          placeholder="Ej. 49.90"
          required
        />
        <p className="label">En soles o dólares</p>
      </fieldset>

      {/* Campo: Stock */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Stock</legend>
        <input
          type="number"
          className="input w-full"
          placeholder="Ej. 20"
          required
        />
        <p className="label">Cantidad disponible para la venta</p>
      </fieldset>

      {/* Campo: Imagen */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">URL de la imagen</legend>
        <input
          type="url"
          className="input w-full"
          placeholder="https://tuimagen.com/ejemplo.jpg"
          required
        />
        <p className="label">Imagen que verá el cliente en la tienda</p>
      </fieldset>

      {/* Botón de envío */}
      <button type="submit" className="btn btn-primary w-full mt-4">
        Guardar producto
      </button>
    </div>
  )
}
