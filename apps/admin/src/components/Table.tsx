import { useEffect } from 'react'
import { useProductStore } from '../contexts/productStore'
import { ErrorAlert } from './ErrorAlert'
import { LoaderRow } from './LoaderRow'
import { Row } from './Row'
import { InfoIcon } from './Icons'
export const Table = () => {
  const { products, loading, error, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-[100%]">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Image Link</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loading && <LoaderRow />}

          {error ? (
            <ErrorAlert message={error && 'Hubo un error inesperado'} />
          ) : (
            products.length > 0 &&
            products.map(({ id, name, price, stock, image }) => (
              <Row
                key={id}
                id={id}
                name={name}
                price={price}
                stock={stock}
                image={image}
              />
            ))
          )}

          {products.length === 0 && !loading && (
            <tr>
              <td colSpan={5}>
                <div role="alert" className="alert">
                  <InfoIcon />
                  <span>No se hallo el producto</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
