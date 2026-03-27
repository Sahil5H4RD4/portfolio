import { motion } from 'framer-motion'
import { Sparkles, MousePointerClick } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero-section">
      <motion.div 
        id="hero-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="hero-content"
      >
        <div className="badge">
          <Sparkles size={16} className="badge-icon" />
          <span>Full-Stack Creative Engineer</span>
        </div>
        
        <h1 className="hero-title">
          Crafting Immersive <br />
          <span className="text-gradient">Digital Experiences</span>
        </h1>
        
        <p className="hero-subtitle">
          Transforming complex ideas into elegant, interactive 3D realities using React, WebGL, and modern architectures.
        </p>
        
        <div className="hero-action-hint">
          <MousePointerClick size={20} className="glow-icon" />
          <span className="pulse-text">Click on any planet to explore my sections</span>
        </div>
      </motion.div>
    </section>
  )
}
