import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Overview from './screens/Overview/Overview'

const Root: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
          />
      </Routes>
    </Layout>
  )
}

export default Root
