import { useState } from 'react'
import { Scene } from './components/Scene'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PortfolioPanel } from './components/PortfolioPanel'
import './index.css'

export default function App() {
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null)
  const [selectedSectionName, setSelectedSectionName] = useState<string>('')

  const handlePlanetClick = (id: string, name: string) => {
    setSelectedSectionId(id)
    setSelectedSectionName(name)
  }

  const closePanel = () => {
    setSelectedSectionId(null)
  }

  return (
    <div className="app-container">
      {/* 3D Background */}
      <div className="canvas-wrapper">
        <Scene onPlanetClick={handlePlanetClick} />
      </div>

      {/* UI Overlay */}
      <div className="ui-overlay">
        <Header />
        
        {/* Only show Hero if no portfolio section is active */}
        {!selectedSectionId && (
          <main className="main-content">
            <Hero />
          </main>
        )}
      </div>

      {/* Side Panel for Portfolio Content */}
      <PortfolioPanel 
        sectionId={selectedSectionId} 
        sectionName={selectedSectionName} 
        onClose={closePanel} 
      />
    </div>
  )
}
