import { motion } from 'framer-motion'
import { Sparkles, MousePointerClick } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero-section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="hero-content"
      >
        <div className="badge">
          <Sparkles size={16} className="badge-icon" />
          <span>Creative Developer & Engineer</span>
        </div>
        
        <h1 className="hero-title">
          Hello, I build <br />
          <span className="text-gradient">Digital Universes</span>
        </h1>
        
        <p className="hero-subtitle">
          Welcome to my interactive 3D portfolio. I specialize in React, WebGL, and modern UI architectures. 
        </p>
        
        <div className="hero-action-hint">
          <MousePointerClick size={20} className="glow-icon" />
          <span className="pulse-text">Click on any planet to explore my sections</span>
        </div>
      </motion.div>
    </section>
  )
}
