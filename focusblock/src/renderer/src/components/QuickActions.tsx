import { Plus, Upload, Users, FolderPlus } from 'lucide-react'

function QuickActions(): React.JSX.Element {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="h5 mb-3">Schnellaktionen</h2>
        <div className="row g-2">
          <div className="col-6">
            <button
              className="btn w-100 d-flex flex-column align-items-center gap-2 py-3 text-white"
              style={{ backgroundColor: '#8b5cf6', borderColor: '#8b5cf6' }}
            >
              <Plus size={20} />
              Task erstellen
            </button>
          </div>
          <div className="col-6">
            <button
              className="btn w-100 d-flex flex-column align-items-center gap-2 py-3 text-white"
              style={{ backgroundColor: '#3b82f6', borderColor: '#3b82f6' }}
            >
              <Upload size={20} />
              Hochladen
            </button>
          </div>
          <div className="col-6">
            <button
              className="btn w-100 d-flex flex-column align-items-center gap-2 py-3 text-white"
              style={{ backgroundColor: '#22c55e', borderColor: '#22c55e' }}
            >
              <Users size={20} />
              Team einladen
            </button>
          </div>
          <div className="col-6">
            <button
              className="btn w-100 d-flex flex-column align-items-center gap-2 py-3 text-white"
              style={{ backgroundColor: '#f59e0b', borderColor: '#f59e0b' }}
            >
              <FolderPlus size={20} />
              Projekt starten
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickActions
