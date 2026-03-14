import { Target, Upload, ShieldOff, Users } from 'lucide-react'

interface Anzeige {
  taskNumber: number
  uploadToday: number
  numberOfBlockedApps: number
  numberOfTeamMembers: number
}

function Overview({
  taskNumber,
  uploadToday,
  numberOfBlockedApps,
  numberOfTeamMembers
}: Anzeige): React.JSX.Element {
  return (
    <div className="row g-3 text-white">
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card stat-card h-100">
          <div className="card-body">
            <div className="d-flex align-items-start justify-content-between">
              <div>
                <p className="small text-muted-custom mb-2">Aktive Tasks</p>
                <p className="display-6 mb-0">{taskNumber}</p>
              </div>
              <div className={`rounded-3 p-2 icon-bg-blue`}>
                <Target size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card stat-card h-100">
          <div className="card-body">
            <div className="d-flex align-items-start justify-content-between">
              <div>
                <p className="small text-muted-custom mb-2">Hochgeladen heute</p>
                <p className="display-6 mb-0">{uploadToday}</p>
              </div>
              <div className={`rounded-3 p-2 icon-bg-green`}>
                <Upload size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card stat-card h-100">
          <div className="card-body">
            <div className="d-flex align-items-start justify-content-between">
              <div>
                <p className="small text-muted-custom mb-2">Geblockte Apps</p>
                <p className="display-6 mb-0">{numberOfBlockedApps}</p>
              </div>
              <div className={`rounded-3 p-2 icon-bg-orange`}>
                <ShieldOff size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card stat-card h-100">
          <div className="card-body">
            <div className="d-flex align-items-start justify-content-between">
              <div>
                <p className="small text-muted-custom mb-2">Team Mietglieder</p>
                <p className="display-6 mb-0">{numberOfTeamMembers}</p>
              </div>
              <div className={`rounded-3 p-2 icon-bg-purple`}>
                <Users size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
