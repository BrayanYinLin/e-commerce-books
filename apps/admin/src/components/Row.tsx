type Book = {
  id: string
  name: string
  price: number
  stock: number
}

export const Row = ({ id, name, price, stock }: Book) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{stock === 0 ? 'Agotado' : stock}</td>
      <td></td>
    </tr>
  )
}
