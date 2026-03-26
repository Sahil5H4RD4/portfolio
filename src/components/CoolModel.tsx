import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function CoolModel() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
      // Subtle float effect
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2
    }
  })

  return (
    <group>
      <Icosahedron ref={meshRef} args={[2, 4]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#4ade80"
          emissive="#16a34a"
          emissiveIntensity={0.5}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Icosahedron>
      
      {/* Inner glowing core */}
      <Icosahedron args={[1.2, 2]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#3b82f6"
          emissive="#2563eb"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Icosahedron>
    </group>
  )
}
