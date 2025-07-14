import { useEffect } from 'react'
import { useProductStore } from '../contexts/productStore'
import { ErrorAlert } from './ErrorAlert'
import { LoaderRow } from './LoaderRow'
import { Row } from './Row'
export const Table = () => {
  const { products, loading, error, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-[100%]">
      <table className="table table-fixed">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th className="!w-[80px]">Image Link</th>
            <th className="w-[200px]">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loading && <LoaderRow />}

          {error && (
            <ErrorAlert message={error && 'Hubo un error inesperado'} />
          )}

          {products.map(({ id, name, price, stock, image }) => (
            <Row
              key={id}
              id={id}
              name={name}
              price={price}
              stock={stock}
              image={image}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
