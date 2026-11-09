import { useState } from 'react'

import { Outlet, Routes, Route } from 'react-router'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GameGrid from './components/GameGrid'
import MenuDrawer from './components/MenuDrawer'
import ProfileModal from './components/ProfileModal'


function Layout() {
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
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default function App(){

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<GameGrid />} />
        <Route path="snake" element={<h2>Replace by the Snake component</h2>} />
        <Route path="echecs" element={<h2>Replace by the Chess component</h2>} />
        <Route path="dames" element={<h2>Replace by the Gambits component</h2>} />
        <Route path="demineur" element={<h2>Replace by the Minesweeper component</h2>} />
      </Route>
    </Routes>
  )
}
