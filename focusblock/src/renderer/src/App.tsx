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
        </main>
      </div>
    </>
  )
}

export default App
