import { Plus, Upload, Users, FolderPlus, Calendar, Flag, Tag } from 'lucide-react'
import { useState } from 'react'

const actions = [
  {
    id: 'create-task',
    label: 'Task erstellen',
    icon: Plus,
    color: '#8b5cf6'
  },
  {
    id: 'upload-file',
    label: 'Datei hochladen',
    icon: Upload,
    color: '#3b82f6'
  },
  {
    id: 'invite-team',
    label: 'Team einladen',
    icon: Users,
    color: '#22c55e'
  },
  {
    id: 'start-project',
    label: 'Projekt starten',
    icon: FolderPlus,
    color: '#f59e0b'
  }
]

export function QuickActions(): React.JSX.Element {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalId: string) => {
    setActiveModal(modalId)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <>
      <div className="card h-100">
        <div className="card-body">
          <h2 className="h5 mb-3">Schnellaktionen</h2>
          <div className="row g-2">
            {actions.map((action) => {
              const Icon = action.icon
              return (
                <div key={action.label} className="col-6">
                  <button
                    className="btn w-100 d-flex flex-column align-items-center gap-2 py-3 text-white"
                    style={{ backgroundColor: action.color, borderColor: action.color }}
                    onClick={() => openModal(action.id)}
                  >
                    <Icon size={20} />
                    <span className="small">{action.label}</span>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Modal: Task erstellen */}
      {activeModal === 'create-task' && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content text-white"
              style={{ backgroundColor: '#2a2a2a', borderColor: '#454545' }}
            >
              <div className="modal-header border-bottom" style={{ borderColor: '#454545' }}>
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <Plus size={20} style={{ color: '#8b5cf6' }} />
                  Neuen Task erstellen
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="taskTitle" className="form-label">
                      Task Titel
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="taskTitle"
                      placeholder="z.B. Präsentation erstellen"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="taskProject" className="form-label">
                      Projekt
                    </label>
                    <select
                      className="form-select"
                      id="taskProject"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    >
                      <option>Marketing Kampagne</option>
                      <option>FocusBlock v2.0</option>
                      <option>Mobile App Redesign</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="taskDeadline"
                      className="form-label d-flex align-items-center gap-2"
                    >
                      <Calendar size={16} />
                      Deadline
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="taskDeadline"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer border-top" style={{ borderColor: '#454545' }}>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Abbrechen
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: '#8b5cf6', borderColor: '#8b5cf6' }}
                >
                  Task erstellen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Datei hochladen */}
      {activeModal === 'upload-file' && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content text-white"
              style={{ backgroundColor: '#2a2a2a', borderColor: '#454545' }}
            >
              <div className="modal-header border-bottom" style={{ borderColor: '#454545' }}>
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <Upload size={20} style={{ color: '#3b82f6' }} />
                  Datei hochladen
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="uploadTask" className="form-label">
                      Task auswählen
                    </label>
                    <select
                      className="form-select"
                      id="uploadTask"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    >
                      <option>Projektpräsentation erstellen</option>
                      <option>Code Review durchführen</option>
                      <option>Design Mockups finalisieren</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fileUpload" className="form-label">
                      Datei
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="fileUpload"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    />
                    <div className="form-text">
                      Unterstützte Formate: PDF, DOCX, PPTX, JPG, PNG (Max. 50MB)
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fileDescription" className="form-label">
                      Beschreibung (optional)
                    </label>
                    <textarea
                      className="form-control"
                      id="fileDescription"
                      rows={3}
                      placeholder="Füge eine kurze Beschreibung hinzu..."
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    ></textarea>
                  </div>
                  <div
                    className="alert alert-info"
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      borderColor: 'rgba(59, 130, 246, 0.2)',
                      color: '#60a5fa'
                    }}
                  >
                    <small>
                      Nach dem Upload werden die blockierten Apps automatisch entsperrt.
                    </small>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-top" style={{ borderColor: '#454545' }}>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Abbrechen
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: '#3b82f6', borderColor: '#3b82f6' }}
                >
                  Hochladen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Team einladen */}
      {activeModal === 'invite-team' && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content text-white"
              style={{ backgroundColor: '#2a2a2a', borderColor: '#454545' }}
            >
              <div className="modal-header border-bottom" style={{ borderColor: '#454545' }}>
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <Users size={20} style={{ color: '#22c55e' }} />
                  Team-Mitglied einladen
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="inviteEmail" className="form-label">
                      E-Mail Adresse
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inviteEmail"
                      placeholder="name@beispiel.de"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inviteProject" className="form-label">
                      Zu Projekt hinzufügen
                    </label>
                    <select
                      className="form-select"
                      id="inviteProject"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    >
                      <option>Marketing Kampagne</option>
                      <option>FocusBlock v2.0</option>
                      <option>Mobile App Redesign</option>
                      <option>Alle Projekte</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inviteMessage" className="form-label">
                      Persönliche Nachricht (optional)
                    </label>
                    <textarea
                      className="form-control"
                      id="inviteMessage"
                      rows={3}
                      placeholder="Willkommen im Team!"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-top" style={{ borderColor: '#454545' }}>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Abbrechen
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: '#22c55e', borderColor: '#22c55e' }}
                >
                  Einladung senden
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Projekt starten */}
      {activeModal === 'start-project' && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content text-white"
              style={{ backgroundColor: '#2a2a2a', borderColor: '#454545' }}
            >
              <div className="modal-header border-bottom" style={{ borderColor: '#454545' }}>
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <FolderPlus size={20} style={{ color: '#f59e0b' }} />
                  Neues Projekt starten
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="projectName" className="form-label">
                      Projektname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      placeholder="z.B. Website Redesign 2026"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="projectDescription" className="form-label">
                      Beschreibung
                    </label>
                    <textarea
                      className="form-control"
                      id="projectDescription"
                      rows={3}
                      placeholder="Was ist das Ziel dieses Projekts?"
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label d-flex align-items-center gap-2">
                      <Tag size={16} />
                      Projektfarbe
                    </label>
                    <div className="d-flex gap-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="projectColor"
                          id="colorBlue"
                          defaultChecked
                        />
                        <label
                          className="form-check-label d-flex align-items-center gap-1"
                          htmlFor="colorBlue"
                        >
                          <div
                            style={{
                              width: '16px',
                              height: '16px',
                              backgroundColor: '#3b82f6',
                              borderRadius: '4px'
                            }}
                          ></div>
                          Blau
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="projectColor"
                          id="colorPurple"
                        />
                        <label
                          className="form-check-label d-flex align-items-center gap-1"
                          htmlFor="colorPurple"
                        >
                          <div
                            style={{
                              width: '16px',
                              height: '16px',
                              backgroundColor: '#8b5cf6',
                              borderRadius: '4px'
                            }}
                          ></div>
                          Lila
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="projectColor"
                          id="colorGreen"
                        />
                        <label
                          className="form-check-label d-flex align-items-center gap-1"
                          htmlFor="colorGreen"
                        >
                          <div
                            style={{
                              width: '16px',
                              height: '16px',
                              backgroundColor: '#22c55e',
                              borderRadius: '4px'
                            }}
                          ></div>
                          Grün
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="projectTeam" className="form-label">
                      Team-Mitglieder hinzufügen
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectTeam"
                      placeholder="E-Mail eingeben..."
                      style={{
                        backgroundColor: '#343434',
                        borderColor: '#454545',
                        color: '#f7f7f7'
                      }}
                    />
                    <div className="form-text">Du kannst später weitere Mitglieder hinzufügen</div>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-top" style={{ borderColor: '#454545' }}>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Abbrechen
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: '#f59e0b', borderColor: '#f59e0b' }}
                >
                  Projekt erstellen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default QuickActions
