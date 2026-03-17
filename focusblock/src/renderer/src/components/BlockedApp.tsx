import { useState } from 'react'

interface App {
  id: number
  name: string
  isActive: boolean
}

function BlockedApp({ id, name, isActive }: App): React.JSX.Element {
  const [active, changeActive] = useState(isActive)
  return (
    <div
      key={id}
      className="border rounded-3 p-2 hover-lift d-flex justify-content-between align-items-center w-100"
    >
      <h3 className="h6 mb-0">{name}</h3>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          checked={active}
          onChange={() => {
            changeActive(!active)
          }}
          id="flexSwitchCheckDefault"
        />
      </div>
    </div>
  )
}

export default BlockedApp
