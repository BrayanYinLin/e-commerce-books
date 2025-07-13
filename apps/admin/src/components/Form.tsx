import type { FormEvent } from 'react'
import { createProduct } from '../services/CreateProducts'

export const Form = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    createProduct({
      name: formData.get('name') as string,
      price: Number(formData.get('price')) ?? 0,
      stock: Number(formData.get('stock')) ?? 0,
      image: formData.get('image') as string
    }).then((product) => console.log(product))
  }

  return (
    <form
      className="max-w-md mx-auto dark:bg-[#1d232a] bg-white p-6 rounded-xl shadow-md space-y-6"
      onSubmit={handleSubmit}
    >
      {/* Campo: Nombre */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Nombre del producto</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Ej. Polera blanca"
          name="name"
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
          name="price"
          id="price-input"
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
          name="stock"
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
          name="image"
          required
        />
        <p className="label">Imagen que verá el cliente en la tienda</p>
      </fieldset>

      {/* Botón de envío */}
      <button type="submit" className="btn btn-primary w-full mt-4">
        Guardar producto
      </button>
    </form>
  )
}
