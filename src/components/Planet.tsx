import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Ring, Html } from '@react-three/drei'
import * as THREE from 'three'

interface PlanetProps {
  id: string
  name: string
  color: string
  radius: number
  distance: number
  speed: number
  hasRing?: boolean
  ringColor?: string
  ringRadius?: [number, number]
}

export function Planet({ 
  id, 
  name, 
  color, 
  radius, 
  distance, 
  speed, 
  hasRing, 
  ringColor, 
  ringRadius
}: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null)
  const planetRef = useRef<THREE.Mesh>(null)
  
  // Random starting position in orbit
  const startAngle = useRef(Math.random() * Math.PI * 2)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const angle = startAngle.current + t * speed

    if (groupRef.current) {
      // Orbit around sun
      groupRef.current.position.x = Math.cos(angle) * distance
      groupRef.current.position.z = Math.sin(angle) * distance
    }
    
    if (planetRef.current) {
      // Rotation on its own axis
      planetRef.current.rotation.y += 0.01
    }
  })

  // Format section name for aesthetic display
  const displayName = id === 'home' || id === 'soleil' ? 'Home' : name

  return (
    <>
      {/* Orbit path visibility */}
      <Ring args={[distance - 0.05, distance + 0.05, 64]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#ffffff" opacity={0.05} transparent side={THREE.DoubleSide} />
      </Ring>
      
      <group ref={groupRef}>
        <Sphere 
          ref={planetRef} 
          args={[radius, 32, 32]} 
        >
          <meshStandardMaterial 
            color={color} 
            roughness={0.6}
            metalness={0.1}
          />
        </Sphere>
        
        {/* Planetary Ring (e.g. for Saturn) */}
        {hasRing && ringRadius && ringColor && (
          <Ring 
            args={[ringRadius[0], ringRadius[1], 64]} 
            rotation={[-Math.PI / 2 + 0.3, 0, 0]}
          >
            <meshStandardMaterial color={ringColor} side={THREE.DoubleSide} transparent opacity={0.8} />
          </Ring>
        )}

        {/* Floating Label */}
        <Html distanceFactor={25} position={[0, radius + 1.5, 0]} center zIndexRange={[100, 0]}>
          <div className="planet-label" style={{ cursor: 'default' }}>
            <span className="planet-label-name">{displayName}</span>
            <div className="planet-label-line"></div>
          </div>
        </Html>
      </group>
    </>
  )
}
