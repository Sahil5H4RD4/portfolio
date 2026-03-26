import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, ScrollControls, useScroll } from '@react-three/drei'

import * as THREE from 'three'
import { SolarSystem } from './SolarSystem'

interface SceneProps {
  onSectionChange: (id: string | null, name: string) => void
}

function ScrollSectionTracker({ onSectionChange }: { onSectionChange: (id: string | null, name: string) => void }) {
  const scroll = useScroll()
  const lastSection = useRef<string | null>(null)

  useFrame(() => {
    const o = scroll.offset
    let currentSection: { id: string | null; name: string } | null = null

    if (o < 0.1) currentSection = { id: null, name: '' }
    else if (o < 0.3) currentSection = { id: 'skills', name: 'Skills' }
    else if (o < 0.5) currentSection = { id: 'experience', name: 'Experience' }
    else if (o < 0.7) currentSection = { id: 'projects', name: 'Projects' }
    else if (o < 0.9) currentSection = { id: 'about', name: 'About Me' }
    else currentSection = { id: 'contact', name: 'Contact' }

    if (currentSection && currentSection.id !== lastSection.current) {
      lastSection.current = currentSection.id
      // Optional: add a tiny timeout so it doesn't snap instantly when scrolling fast
      onSectionChange(currentSection.id, currentSection.name)
    }
  })

  return null
}

// Controls the camera position based on scroll progress
function CameraScroller() {
  const scroll = useScroll()

  // We want to fly the camera along the Z and X axis to visit the planets,
  // but to keep it simple, let's fly from Z=40 (wide view of Sun) 
  // into Z=5 (close to Sun) and pan slightly across.
  useFrame((state) => {
    const offset = scroll.offset // 0 to 1
    
    // Lerp camera position
    // Start at [0, 15, 35]
    // End near Saturn / Jupiter bounds at [5, 2, 10]
    const targetZ = THREE.MathUtils.lerp(35, 10, offset)
    const targetY = THREE.MathUtils.lerp(15, 2, offset)
    const targetX = THREE.MathUtils.lerp(0, 5, offset)

    state.camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.05)
    
    // Look at the center but slowly scan right as we scroll
    const lookAtX = THREE.MathUtils.lerp(0, 10, offset)
    state.camera.lookAt(lookAtX, 0, 0)
  })

  return null
}

function ScrollFader() {
  const scroll = useScroll()
  useFrame(() => {
    const heroEl = document.getElementById('hero-main')
    if (heroEl) {
      // Fade out from scroll 0.0 to 0.1
      const opacity = 1 - scroll.offset * 10
      heroEl.style.opacity = Math.max(0, opacity).toString()
      heroEl.style.transform = `translateY(${scroll.offset * -200}px)`
      heroEl.style.pointerEvents = scroll.offset > 0.05 ? 'none' : 'auto'
    }
  })
  return null
}



export function Scene({ onSectionChange }: SceneProps) {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 15, 35], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        
        {/* Galaxy Background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ScrollControls pages={5} damping={0.25} distance={1.5}>
          {/* The scrolling camera logic */}
          <CameraScroller />
          <ScrollFader />
          <ScrollSectionTracker onSectionChange={onSectionChange} />

          {/* The Solar System with interactive planets */}
          <SolarSystem />
        </ScrollControls>

      </Canvas>
    </div>
  )
}
