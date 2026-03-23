import { useEffect, useState } from 'react'
import ActiveTasks from './components/ActiveTasks'
import BlockedOverview from './components/BlockedOverview'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import QuickActions from './components/QuickActions'
import { supabase } from './supabaseClient'

function App(): React.JSX.Element {
  const [tasks, setTasks] = useState([{}])

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const { data, error } = await supabase.from('tasks').select('*')
      if (error) {
        console.error('Error loading tasks:', error)
      } else {
        setTasks(data ?? [])
        console.log('Loaded tasks:', data)
      }
    }
    loadData()
  }, [])

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
              <ActiveTasks task={[]} />
            </div>
            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column gap-3">
                <QuickActions />
                <BlockedOverview blockedApps={[{ id: 1, name: 'youtube', isActive: true }]} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
