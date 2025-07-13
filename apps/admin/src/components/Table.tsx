import { useProducts } from '../hooks/UseProducts'
import { ErrorAlert } from './ErrorAlert'
import { LoaderRow } from './LoaderRow'
import { Row } from './Row'
export const Table = () => {
  const { products, loading, error } = useProducts()

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loading && <LoaderRow />}

          {error && (
            <ErrorAlert message={error && 'Hubo un error inesperado'} />
          )}

          {products.map(({ id, name, price, stock }) => (
            <Row key={id} id={id} name={name} price={price} stock={stock} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
