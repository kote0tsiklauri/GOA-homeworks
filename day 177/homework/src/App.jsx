import ErrorBoundary from "./components/ErrorBoundary"
import ErrorTest from "./components/ErrorTest"
function App() {
  

  return (
    <div>
      <ErrorBoundary>
        <ErrorTest />
      </ErrorBoundary>
    </div>
  )
}

export default App
