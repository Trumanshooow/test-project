import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiniAppPage from "@/app/routes/app/mini-app.tsx";
function App() {
  return (
      <div className="w-full h-56">
          <Router>
            <div className="w-full h-56">
              <Routes>
                <Route path="/mini-app" element={<MiniAppPage/>}/>
              </Routes>
            </div>
          </Router>
      </div>
)
}

export default App
