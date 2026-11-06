import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GameGrid from './components/GameGrid'
import MenuDrawer from './components/MenuDrawer'
import ProfileModal from './components/ProfileModal'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  function openProfile() {
    setMenuOpen(false)
    setProfileOpen(true)
  }

  return (
    <>
      <Header
        onMenuClick={() => setMenuOpen(true)}
        onProfileClick={openProfile}
      />

      <MenuDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onProfileClick={openProfile}
      />

      {profileOpen && (
        <ProfileModal onClose={() => setProfileOpen(false)} />
      )}

      <main>
        <GameGrid />
      </main>

      <Footer />
    </>
  )
}

export default App
