import { useEffect, useState, type FormEvent } from 'react'
import { useProductStore } from '../contexts/productStore'

export const Form = () => {
  const { createProduct } = useProductStore()
  const [confirmation, setConfirmation] = useState<boolean>(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    createProduct({
      name: formData.get('name') as string,
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
      image: formData.get('image') as string
    }).then((product) => {
      console.log(product)
      setConfirmation(true)
    })
    event.currentTarget.reset()
  }

  useEffect(() => {
    setTimeout(() => {
      if (confirmation) {
        setConfirmation(false)
      }
    }, 1000)
  }, [confirmation])

  return (
    <>
      <form
        className="max-w-md mx-auto dark:bg-[#1d232a] bg-white p-6 rounded-xl shadow-md space-y-3"
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
          <p className="text-xs label">Nombre que se mostrará al cliente</p>
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
          <p className="text-xs label">En soles o dólares</p>
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
          <p className="text-xs label">Cantidad disponible para la venta</p>
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
          <p className="text-xs label">
            Imagen que verá el cliente en la tienda
          </p>
        </fieldset>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary w-full mt-4">
          Guardar producto
        </button>
      </form>
      {confirmation && (
        <div className="toast">
          <div className="alert alert-info">
            <span>Nuevo Producto Creado</span>
          </div>
        </div>
      )}
    </>
  )
}
