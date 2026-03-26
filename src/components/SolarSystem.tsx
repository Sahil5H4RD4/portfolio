import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { Planet } from './Planet'

export const PORTFOLIO_MAPPING = [
  { id: 'about', name: 'About Me', color: '#2b82c9', radius: 1, distance: 8.5, speed: 0.5 }, // Earth
  { id: 'projects', name: 'Projects', color: '#c1440e', radius: 0.53, distance: 11, speed: 0.4 }, // Mars
  { id: 'experience', name: 'Experience', color: '#d39c7e', radius: 2.5, distance: 16, speed: 0.2 }, // Jupiter
  { id: 'skills', name: 'Skills', color: '#ead6b8', radius: 2.1, distance: 22, speed: 0.15, hasRing: true, ringColor: '#cfae76', ringRadius: [2.5, 4.5] as [number, number] }, // Saturn
  { id: 'contact', name: 'Contact', color: '#e3bb76', radius: 0.95, distance: 6, speed: 0.6 }, // Venus
]

interface SolarSystemProps {
  onPlanetClick: (id: string, name: string) => void
}

export function SolarSystem({ onPlanetClick }: SolarSystemProps) {
  const sunRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005
    }
  })

  return (
    <group>
      {/* The Sun (Home / Intro) */}
      <Sphere 
        ref={sunRef} 
        args={[2.5, 64, 64]} 
        onClick={(e) => {
          e.stopPropagation()
          onPlanetClick('home', 'Welcome')
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto'
        }}
      >
        <meshBasicMaterial color="#fcd34d" />
      </Sphere>
      
      {/* Sun Glow */}
      <PointLight position={[0, 0, 0]} color="#fde68a" intensity={400} distance={100} decay={2} />
      <ambientLight intensity={0.05} />

      {/* Portfolio Planets */}
      {PORTFOLIO_MAPPING.map((planet) => (
        <Planet 
          key={planet.id}
          {...planet}
          onPlanetClick={onPlanetClick}
        />
      ))}
    </group>
  )
}

function PointLight(props: any) {
  return <pointLight {...props} />
}
