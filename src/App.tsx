import { Scene } from './components/Scene'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import './index.css'

export default function App() {
  return (
    <div className="app-container">
      {/* 3D Background */}
      <div className="canvas-wrapper">
        <Scene />
      </div>

      {/* UI Overlay */}
      <div className="ui-overlay">
        <Header />
        
        <main className="main-content">
          <Hero />
        </main>
      </div>
    </div>
  )
}
