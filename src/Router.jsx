import { Routes, Route } from 'react-router-dom'
import { App } from './App'

import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Depositions } from './pages/Depositions'
import { Models } from './pages/Models'
import { Team } from './pages/Team'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/models" element={<Models />} />
      <Route path="/depositions" element={<Depositions />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}