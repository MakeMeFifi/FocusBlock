import { title } from 'process'
import ActiveTasks from './components/ActiveTasks'
import Navbar from './components/Navbar'
import Overview from './components/Overview'

function App(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <div className="bg-dark vh-100 text-white body">
        <main className="container fluid p-4">
          <div className="mx-auto" style={{ maxWidth: '1400px' }}>
            <div className="mb-4">
              <Overview
                numberOfBlockedApps={4}
                taskNumber={3}
                uploadToday={2}
                numberOfTeamMembers={7}
              />
            </div>
          </div>
          <div className="row g-4 mb-4">
            <div className="col-12 col-lg-8">
              <ActiveTasks
                task={[
                  {
                    id: 1,
                    title: 'test',
                    deadline: 'heute',
                    project: 'tester',
                    uploaded: false
                  },
                  {
                    id: 1,
                    title: 'test',
                    deadline: 'heute',
                    project: 'tester',
                    uploaded: true
                  }
                ]}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
