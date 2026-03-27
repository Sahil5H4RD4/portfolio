import { Scroll } from '@react-three/drei'
import { Code2, Briefcase, GraduationCap, User, ExternalLink } from 'lucide-react'

export function PortfolioScrollPages() {
  return (
    <Scroll html style={{ width: '100vw' }}>
      
      {/* Page 0 (0vh): Home / Sun - The Hero text is handled separately in Hero.tsx fading out */}
      <div className="scroll-page" style={{ height: '100vh' }}></div>

      {/* Page 1 (100vh): Skills / Saturn */}
      <div className="scroll-page" style={{ height: '100vh' }}>
        <section className="scroll-section right-aligned">
          <div className="scroll-card glass-panel">
            <h2 className="panel-title">Skills</h2>
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

              <h5 className="skill-category">Soft Skills</h5>
              <div className="skill-tags">
                <span className="skill-tag">Communication</span>
                <span className="skill-tag">Critical Thinking</span>
                <span className="skill-tag">Teamwork</span>
                <span className="skill-tag">Time management</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Page 2 (200vh): Experience / Jupiter */}
      <div className="scroll-page" style={{ height: '100vh' }}>
        <section className="scroll-section left-aligned">
          <div className="scroll-card glass-panel">
            <h2 className="panel-title">Experience</h2>
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
          </div>
        </section>
      </div>

      {/* Page 3 (300vh): Projects / Mars */}
      <div className="scroll-page" style={{ height: '100vh' }}>
        <section className="scroll-section right-aligned">
          <div className="scroll-card glass-panel">
            <h2 className="panel-title">Projects</h2>
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
          </div>
        </section>
      </div>

      {/* Page 4 (400vh): About Me & Contact / Earth & Venus */}
      <div className="scroll-page" style={{ height: '100vh' }}>
        <section className="scroll-section center-aligned">
          <div className="scroll-card glass-panel flex-row-responsive">
            
            {/* About */}
            <div className="flex-1">
              <h2 className="panel-title">About Me</h2>
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
            </div>

            {/* Contact */}
            <div className="flex-1 divider-left">
              <h2 className="panel-title">Contact</h2>
              <div className="section-content">
                <p className="lead-text">Let's build something amazing together.</p>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" className="form-input" />
                  <input type="email" placeholder="Your Email" className="form-input" />
                  <textarea placeholder="Message" className="form-textarea" rows={4}></textarea>
                  <button className="btn-primary w-full" type="button">Send Transmission</button>
                </form>
              </div>
            </div>

          </div>
        </section>
      </div>

    </Scroll>
  )
}
