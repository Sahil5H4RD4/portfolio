import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface AsteroidBeltProps {
  count?: number
  innerRadius?: number
  outerRadius?: number
}

export function AsteroidBelt({ count = 2000, innerRadius = 13, outerRadius = 15 }: AsteroidBeltProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  
  // Pre-calculate positions, rotations, and scales for all asteroids
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const speeds = useMemo(() => new Float32Array(count), [count])
  const phases = useMemo(() => new Float32Array(count), [count])

  useMemo(() => {
    if (!meshRef.current) return
    for (let i = 0; i < count; i++) {
      // Random angle in the ring
      const theta = Math.random() * Math.PI * 2
      // Random radius between inner and outer
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius)
      
      const x = Math.cos(theta) * radius
      // Slightly vary the Y height to give volume
      const y = (Math.random() - 0.5) * 1.5
      const z = Math.sin(theta) * radius

      dummy.position.set(x, y, z)
      
      // Random rotation
      dummy.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      
      // Random scale
      const scale = Math.random() * 0.15 + 0.05
      dummy.scale.set(scale, scale, scale)
      
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
      
      // Setup movement logic: each asteroid has a slightly different orbit speed and phase
      speeds[i] = (Math.random() * 0.05 + 0.05) * (Math.random() > 0.5 ? 1 : -1) // orbit speed
      phases[i] = theta
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [count, dummy, innerRadius, outerRadius, phases, speeds])

  useFrame(() => {
    if (meshRef.current) {
      // Slowly rotate the entire belt
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#888888" roughness={0.9} metalness={0.1} />
    </instancedMesh>
  )
}
