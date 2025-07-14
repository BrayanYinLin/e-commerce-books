import { type FormEvent } from 'react'
import { Overlay } from './Overlay'
import { useProductStore } from '../contexts/productStore'

type EditProductProps = {
  id: string
  name: string
  price: number
  stock: number
  image: string
  close: () => void
}

export function EditProduct({
  id,
  name,
  price,
  stock,
  image,
  close
}: EditProductProps) {
  const { updateProduct } = useProductStore()

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    updateProduct({
      id,
      name: formData.get('name') as string,
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
      image: formData.get('image') as string
    }).then((product) => console.log(product))

    close()

    event.currentTarget.reset()
  }

  return (
    <Overlay>
      <form
        className="fixed z-40 top-[10%] right-[33%] w-[400px] h-[500px] mx-auto dark:bg-[#1d232a] bg-white p-6 rounded-xl shadow-md space-y-4"
        onSubmit={submit}
      >
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={close}
        >
          ✕
        </button>
        {/* Campo: Nombre */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Nombre del producto</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Ej. Polera blanca"
            name="name"
            defaultValue={name}
            required
          />
        </fieldset>

        {/* Campo: Precio */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Precio</legend>
          <input
            type="number"
            className="input w-full"
            placeholder="Ej. 49.90"
            name="price"
            defaultValue={price}
            step={0.01}
            id="price-input"
            required
          />
        </fieldset>

        {/* Campo: Stock */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Stock</legend>
          <input
            type="number"
            className="input w-full"
            placeholder="Ej. 20"
            name="stock"
            defaultValue={stock}
            required
          />
        </fieldset>

        {/* Campo: Imagen */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">URL de la imagen</legend>
          <input
            type="url"
            className="input w-full"
            placeholder="https://tuimagen.com/ejemplo.jpg"
            name="image"
            defaultValue={image}
            required
          />
        </fieldset>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary w-full mt-2">
          Editar producto
        </button>
      </form>
    </Overlay>
  )
}
