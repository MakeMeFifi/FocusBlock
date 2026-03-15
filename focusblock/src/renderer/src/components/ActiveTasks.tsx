import { Upload, Clock, AlertCircle } from 'lucide-react'

interface Task {
  id: number
  title: string
  deadline: string
  project: string
  uploaded: boolean
}

interface TaskList {
  task: Task[]
}

function ActiveTasks({ task }: TaskList): React.JSX.Element {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="h4 mb-0">Aktive Tabs</h2>
          <button className="btn btn-primary btn-sm">Neuer Task</button>
        </div>

        <div className="d-flex flex-column gap-3">
          {task.map((t) => (
            <div key={t.id} className="hover-lift border rounded-3 p-3">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h3 className="h6 mb-0">{t.title}</h3>
                {t.uploaded ? (
                  <div className="icon-bg-green rounded-circle p-2">
                    <Upload size={16} />
                  </div>
                ) : (
                  <div className="icon-bg-orange rounded-circle p-2">
                    <AlertCircle size={16} />
                  </div>
                )}
              </div>
              <p className="small text-muted-custom mb-0">{t.project}</p>
              <div className="d-flex align-items-center gap-2 mb-3 small text-muted-custom">
                <Clock size={16} />
                <span>Deadline: {t.deadline}</span>
              </div>
              {!t.uploaded ? (
                <button className="btn btn-primary w-100 btn-sm">
                  <Upload size={16} className="me-2" />
                  Jetzt hochladen
                </button>
              ) : (
                <div className="alert alert-success text-center mb-0 py-2">
                  <p className="small mb-0">✓ Upload abgeschlossen</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActiveTasks
