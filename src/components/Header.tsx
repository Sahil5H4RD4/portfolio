import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="header"
    >
      <div className="logo">
        <div className="logo-dot"></div>
        <span>PORTFOLIO</span>
      </div>

      <nav className="nav-links">
        {/* We can rely solely on the 3D planets for navigation, or keep text links as fallbacks */}
        <span className="nav-text">Explore the system to navigate</span>
      </nav>

      <div className="header-actions">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-btn">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-btn">
          <Linkedin size={20} />
        </a>
        <a href="mailto:hello@example.com" className="icon-btn">
          <Mail size={20} />
        </a>
        <button className="menu-btn">
          <Menu size={24} />
        </button>
      </div>
    </motion.header>
  )
}
