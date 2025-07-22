import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Tube } from '@react-three/drei';
import * as THREE from 'three';

function HelixStructure() {
  const helixRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const helixCurve = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -5, 0),
      new THREE.Vector3(2, -2.5, 0),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-2, 2.5, 0),
      new THREE.Vector3(0, 5, 0),
    ]);
    return curve;
  }, []);

  const basePairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < 20; i++) {
      const y = (i - 10) * 0.5;
      const angle = (i * Math.PI) / 5;
      pairs.push({
        pos1: [Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5],
        pos2: [Math.cos(angle + Math.PI) * 1.5, y, Math.sin(angle + Math.PI) * 1.5],
        color: i % 4 === 0 ? '#00bfff' : i % 4 === 1 ? '#00ffff' : i % 4 === 2 ? '#ff6b6b' : '#ffff00'
      });
    }
    return pairs;
  }, []);

  return (
    <group ref={helixRef}>
      {/* DNA Backbone */}
      <Tube args={[helixCurve, 20, 0.1, 8, false]}>
        <meshStandardMaterial color="#00bfff" emissive="#003366" />
      </Tube>
      
      {/* Base Pairs */}
      {basePairs.map((pair, index) => (
        <group key={index}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere position={pair.pos1 as [number, number, number]} args={[0.15, 8, 6]}>
              <meshStandardMaterial 
                color={pair.color} 
                emissive={pair.color}
                emissiveIntensity={0.3}
              />
            </Sphere>
          </Float>
          <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.3}>
            <Sphere position={pair.pos2 as [number, number, number]} args={[0.15, 8, 6]}>
              <meshStandardMaterial 
                color={pair.color} 
                emissive={pair.color}
                emissiveIntensity={0.3}
              />
            </Sphere>
          </Float>
          {/* Connection between base pairs */}
          <mesh position={[0, pair.pos1[1], 0]}>
            <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
            <meshStandardMaterial color="#666666" transparent opacity={0.6} />
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
      <Canvas camera={{ position: [5, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00bfff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
        <HelixStructure />
      </Canvas>
    </div>
  );
}