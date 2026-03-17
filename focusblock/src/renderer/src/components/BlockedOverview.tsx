import { ShieldOff } from 'lucide-react'
import { useState } from 'react'
import BlockedApp from './BlockedApp'

interface BlockedApp {
  id: number
  name: string
  isActive: boolean
}

interface ListOfBlockedApps {
  blockedApps: BlockedApp[]
}

function BlockedOverview({ blockedApps }: ListOfBlockedApps): React.JSX.Element {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center text-center mb-3">
          <h2 className="h5 mb-3">Blockierte Apps</h2>
          <ShieldOff size={20} className="mb-3" style={{ color: '#fbbf24' }} />
        </div>
        <div className="alert alert-warning-custom mb-3 py-2">
          <p className="small mb-0" style={{ color: '#fbbf24' }}>
            Apps werden automatisch entsperrt, wenn zugehörige Tasks abgeschlossen sind.
          </p>
        </div>
        <div className="d-flex flex-colum gap-3">
          {blockedApps.map((app) => (
            <BlockedApp key={app.id} id={app.id} name={app.name} isActive={app.isActive} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlockedOverview
