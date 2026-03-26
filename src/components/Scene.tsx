import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, ScrollControls, useScroll } from '@react-three/drei'

import * as THREE from 'three'
import { SolarSystem } from './SolarSystem'

interface SceneProps {
  onPlanetClick: (id: string, name: string) => void
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
    // Start at [0, 15, 40]
    // End near Saturn / Jupiter bounds at [10, 5, 20]
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

export function Scene({ onPlanetClick }: SceneProps) {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 15, 35], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        
        {/* Galaxy Background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ScrollControls pages={5} damping={0.25} distance={1.5}>
          {/* The scrolling camera logic */}
          <CameraScroller />

          {/* The Solar System with interactive planets */}
          <SolarSystem onPlanetClick={onPlanetClick} />
        </ScrollControls>

      </Canvas>
    </div>
  )
}
