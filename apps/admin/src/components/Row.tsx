import { createPortal } from 'react-dom'
import { EditProduct } from './EditProduct'
import { useState } from 'react'
import type { Product } from '../types'
import { useProductStore } from '../contexts/productStore'

export const Row = ({ id, name, price, stock, image }: Product) => {
  const [modal, setModal] = useState<boolean>(false)
  const { deleteProduct } = useProductStore()

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{stock === 0 ? 'Agotado' : stock}</td>
      <td className="truncate overflow-x-hidden max-w-[300px]">{image}</td>
      <td className="flex gap-2">
        <button className="btn" onClick={() => setModal(true)}>
          Editar
        </button>
        <button className="btn" onClick={() => deleteProduct(id)}>
          Eliminar
        </button>
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
