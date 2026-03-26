import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { SolarSystem } from './SolarSystem'

interface SceneProps {
  onPlanetClick: (id: string, name: string) => void
}

export function Scene({ onPlanetClick }: SceneProps) {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 15, 30], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        
        {/* Galaxy Background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* The Solar System with interactive planets */}
        <SolarSystem onPlanetClick={onPlanetClick} />
        
        {/* Camera Controls */}
        <OrbitControls 
          enableZoom={true} 
          enablePan={true}
          maxDistance={100}
          minDistance={5}
        />
      </Canvas>
    </div>
  )
}
