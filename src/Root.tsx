import React from 'react'
import { Route, Routes} from 'react-router-dom'
import App from './App'

const Root: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
        />
    </Routes>
  )
}

export default Root
