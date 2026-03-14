import Navbar from './components/Navbar'

function App(): React.JSX.Element {
  return (
    <div className="bg-dark vh-100 text-white body">
      <Navbar />
      <div className="d-flex justify-content-center align-items-center">
        <h1>Hello World</h1>
      </div>
    </div>
  )
}

export default App
