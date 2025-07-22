import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function HelixStructure() {
  const helixRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const basePairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < 15; i++) {
      const y = (i - 7) * 0.6;
      const angle = (i * Math.PI) / 4;
      pairs.push({
        pos1: [Math.cos(angle) * 1.2, y, Math.sin(angle) * 1.2],
        pos2: [Math.cos(angle + Math.PI) * 1.2, y, Math.sin(angle + Math.PI) * 1.2],
        color: i % 4 === 0 ? '#00bfff' : i % 4 === 1 ? '#00ffff' : i % 4 === 2 ? '#ff6b6b' : '#ffff00'
      });
    }
    return pairs;
  }, []);

  return (
    <group ref={helixRef}>
      {/* DNA Strands - Simple cylinder backbone */}
      <mesh position={[1.2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 8, 8]} />
        <meshStandardMaterial color="#00bfff" emissive="#003366" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-1.2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 8, 8]} />
        <meshStandardMaterial color="#00bfff" emissive="#003366" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Base Pairs */}
      {basePairs.map((pair, index) => (
        <group key={index}>
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
            <Sphere position={pair.pos1 as [number, number, number]} args={[0.12, 8, 6]}>
              <meshStandardMaterial 
                color={pair.color} 
                emissive={pair.color}
                emissiveIntensity={0.2}
              />
            </Sphere>
          </Float>
          <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.2}>
            <Sphere position={pair.pos2 as [number, number, number]} args={[0.12, 8, 6]}>
              <meshStandardMaterial 
                color={pair.color} 
                emissive={pair.color}
                emissiveIntensity={0.2}
              />
            </Sphere>
          </Float>
          {/* Connection between base pairs */}
          <mesh position={[0, pair.pos1[1], 0]}>
            <cylinderGeometry args={[0.015, 0.015, 2.4, 6]} />
            <meshStandardMaterial color="#666666" transparent opacity={0.4} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

interface DNAHelixProps {
  className?: string;
}

export default function DNAHelix({ className = "" }: DNAHelixProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas 
        camera={{ position: [5, 0, 8], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00bfff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
          <HelixStructure />
        </Suspense>
      </Canvas>
    </div>
  );
}