import { createPortal } from 'react-dom'
import { EditProduct } from './EditProduct'
import { useEffect, useState } from 'react'

type Book = {
  id: string
  name: string
  price: number
  stock: number
  image: string
}

export const Row = ({ id, name, price, stock, image }: Book) => {
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    console.log(modal)
  }, [modal])

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{stock === 0 ? 'Agotado' : stock}</td>
      <td className="!w-[80px] overflow-x-hidden">{image}</td>
      <td className="flex gap-2">
        <button className="btn" onClick={() => setModal(true)}>
          Editar
        </button>
        <button className="btn">Eliminar</button>
      </td>
      {modal &&
        createPortal(
          <EditProduct
            id={id}
            name={name}
            stock={stock}
            price={price}
            image={image}
            close={() => setModal(false)}
          />,
          document.body
        )}
    </tr>
  )
}
