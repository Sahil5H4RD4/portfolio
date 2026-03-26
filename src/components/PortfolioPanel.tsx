import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Code2, Briefcase, GraduationCap, User } from 'lucide-react'

interface PortfolioPanelProps {
  sectionId: string | null
  sectionName: string
  onClose: () => void
}

export function PortfolioPanel({ sectionId, sectionName, onClose }: PortfolioPanelProps) {
  
  const renderContent = () => {
    switch (sectionId) {
      case 'home':
        return (
          <div className="section-content">
            <h3 className="section-subtitle">System Core</h3>
            <p>You have reached the center of my digital universe. This is the starting point.</p>
            <p>Use the orbiting planets to navigate through my professional journey, skills, and projects.</p>
          </div>
        )
      case 'about':
        return (
          <div className="section-content">
            <User className="section-icon" size={32} />
            <p className="lead-text">Hi, I'm a passionate Creative Developer bridging the gap between design and engineering.</p>
            <p>With a deep love for interactive WebGL experiences, I build interfaces that don't just work—they make people go "wow".</p>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-num">5+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">20+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
          </div>
        )
      case 'projects':
        return (
          <div className="section-content">
            <Code2 className="section-icon" size={32} />
            <div className="project-card">
              <h4>Neon E-Commerce</h4>
              <p>A futuristic storefront built with Next.js, Framer Motion, and Tailwind.</p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Three.js</span>
              </div>
              <a href="#" className="project-link">View Live <ExternalLink size={14} /></a>
            </div>
            <div className="project-card">
              <h4>DataVis Dashboard</h4>
              <p>Real-time analytics dashboard with dynamic canvas charts and WebSockets.</p>
              <div className="tags">
                <span className="tag">Vue</span>
                <span className="tag">D3.js</span>
              </div>
              <a href="#" className="project-link">View Live <ExternalLink size={14} /></a>
            </div>
          </div>
        )
      case 'experience':
        return (
          <div className="section-content">
            <Briefcase className="section-icon" size={32} />
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h5>Senior Frontend Engineer</h5>
                <span className="timeline-date">2021 - Present @ TechCorp</span>
                <p>Leading the architecture of next-gen web applications and mentoring junior devs.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h5>UI/UX Developer</h5>
                <span className="timeline-date">2018 - 2021 @ DesignStudio</span>
                <p>Created award-winning interactive marketing sites.</p>
              </div>
            </div>
          </div>
        )
      case 'skills':
        return (
          <div className="section-content">
            <GraduationCap className="section-icon" size={32} />
            <p>A comprehensive toolkit spanning engineering, design, and soft skills.</p>
            
            <h5 className="skill-category">Languages & Core</h5>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">SQL</span>
            </div>

            <h5 className="skill-category">Frontend & UI/UX</h5>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next JS</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Canva</span>
              <span className="skill-tag">UI/UX</span>
            </div>

            <h5 className="skill-category">Backend & DB</h5>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express JS</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">Supabase</span>
              <span className="skill-tag">Prisma ORM</span>
              <span className="skill-tag">API Integration</span>
              <span className="skill-tag">OAuth 2.0</span>
            </div>

            <h5 className="skill-category">Data & AI</h5>
            <div className="skill-tags">
              <span className="skill-tag">Hugging Face</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Matplotlib</span>
              <span className="skill-tag">Data Structure</span>
            </div>

            <h5 className="skill-category">Tools & Workflow</h5>
            <div className="skill-tags">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">GitHub Actions</span>
              <span className="skill-tag">Excel / Spreadsheet</span>
            </div>

            <h5 className="skill-category">Soft Skills</h5>
            <div className="skill-tags">
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Creativity</span>
              <span className="skill-tag">Critical Thinking</span>
              <span className="skill-tag">Decision-making</span>
              <span className="skill-tag">Presentation</span>
              <span className="skill-tag">Public speaking</span>
              <span className="skill-tag">Responsibility</span>
              <span className="skill-tag">Team Building</span>
              <span className="skill-tag">Teamwork</span>
              <span className="skill-tag">Time management</span>
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="section-content">
            <p className="lead-text">Let's build something amazing together.</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" />
              <textarea placeholder="Message" className="form-textarea" rows={4}></textarea>
              <button className="btn-primary w-full" type="button">Send Transmission</button>
            </form>
          </div>
        )
      default:
        return <p>Select a planetary body to learn more.</p>
    }
  }

  return (
    <AnimatePresence>
      {sectionId && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="info-panel"
        >
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <h2 className="panel-title">{sectionName}</h2>

          {renderContent()}

        </motion.div>
      )}
    </AnimatePresence>
  )
}
