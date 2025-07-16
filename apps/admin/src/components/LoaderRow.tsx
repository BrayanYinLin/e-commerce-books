import { InfoIcon } from './Icons'

export function LoaderRow() {
  return (
    <tr>
      <td colSpan={5}>
        <div role="alert" className="alert">
          <InfoIcon />
          <span>Loading</span>
        </div>
      </td>
    </tr>
  )
}
