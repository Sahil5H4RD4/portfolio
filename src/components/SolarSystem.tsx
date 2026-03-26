import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { Planet } from './Planet'
import { AsteroidBelt } from './AsteroidBelt'

export const PORTFOLIO_MAPPING = [
  { id: 'about', name: 'Earth', color: '#2b82c9', radius: 1, distance: 8.5, speed: 0.5 }, // Earth
  { id: 'projects', name: 'Mars', color: '#c1440e', radius: 0.53, distance: 11, speed: 0.4 }, // Mars
  { id: 'experience', name: 'Jupiter', color: '#d39c7e', radius: 2.5, distance: 16, speed: 0.2 }, // Jupiter
  { id: 'skills', name: 'Saturn', color: '#ead6b8', radius: 2.1, distance: 22, speed: 0.15, hasRing: true, ringColor: '#cfae76', ringRadius: [2.5, 4.5] as [number, number] }, // Saturn
  { id: 'contact', name: 'Venus', color: '#e3bb76', radius: 0.95, distance: 6, speed: 0.6 }, // Venus
]

export function SolarSystem() {
  const sunRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002
    }
  })

  return (
    <group>
      {/* The Sun (Home / Intro) */}
      <Sphere 
        ref={sunRef} 
        args={[3, 64, 64]} 
      >
        <meshBasicMaterial color="#fcd34d" />
      </Sphere>
      
      {/* Sun Glow/Bloom Source */}
      <PointLight position={[0, 0, 0]} color="#fde68a" intensity={400} distance={150} decay={2} />
      <ambientLight intensity={0.05} />

      {/* Asteroid Belt separating Mars and Jupiter */}
      <AsteroidBelt count={3000} innerRadius={12.5} outerRadius={14.5} />

      {/* Portfolio Planets */}
      {PORTFOLIO_MAPPING.map((planet) => (
        <Planet 
          key={planet.id}
          {...planet}
        />
      ))}
    </group>
  )
}

function PointLight(props: any) {
  return <pointLight {...props} />
}
