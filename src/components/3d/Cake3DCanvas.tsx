"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Komponen 3D Bolu Chiffon Keju Susu Khas Bokis (Berdasarkan Gambar 4 Turnaround Sheet)
function ChiffonCakeMesh() {
  const cakeGroupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Animasi rotasi halus + reaksi hover kursor
  useFrame((state, delta) => {
    if (cakeGroupRef.current) {
      // Rotasi idle pelan
      cakeGroupRef.current.rotation.y += delta * (hovered ? 0.35 : 0.2);
    }
  });

  // Material Spons Bolu (Golden Yellow berserat lembut)
  const spongeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#F6C445"), // Kuning keemasan spons bolu susu
      roughness: 0.85,
      metalness: 0.05,
      bumpScale: 0.05,
    });
  }, []);

  // Material Kerak Atas Panggang (Baked Crust - Golden Brown)
  const crustMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#D97706"), // Cokelat keemasan matang
      roughness: 0.7,
      metalness: 0.08,
    });
  }, []);

  // Piring Saji Keramik Putih (Seperti di Gambar 4)
  const plateMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#FFFFFF"),
      roughness: 0.2,
      metalness: 0.1,
    });
  }, []);

  // Daun Mint Hijau Segar
  const mintMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#16A34A"),
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
  }, []);

  // Batang Daun Mint
  const stemMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color("#15803D"),
      roughness: 0.6,
    });
  }, []);

  // Geometri Bolu Chiffon Tube (Bentuk cincin bolu berlubang tengah)
  // Menggunakan LatheGeometry untuk siluet samping melengkung lembut
  const cakeGeometry = useMemo(() => {
    const points: THREE.Vector2[] = [];
    const innerRadius = 0.55;
    const outerRadius = 1.65;
    const height = 0.95;

    // Bagian bawah dalam
    points.push(new THREE.Vector2(innerRadius, 0));
    // Dinding dalam lurus
    points.push(new THREE.Vector2(innerRadius, height * 0.85));
    // Lengkungan atas dalam
    points.push(new THREE.Vector2(innerRadius + 0.1, height * 0.98));
    // Puncak atas bolu
    points.push(new THREE.Vector2((innerRadius + outerRadius) / 2, height * 1.05));
    // Lengkungan atas luar
    points.push(new THREE.Vector2(outerRadius - 0.1, height * 0.96));
    // Dinding luar samping (tekstur mengembang)
    points.push(new THREE.Vector2(outerRadius, height * 0.7));
    points.push(new THREE.Vector2(outerRadius, 0.05));
    // Dasar bawah luar
    points.push(new THREE.Vector2(outerRadius - 0.05, 0));
    points.push(new THREE.Vector2(innerRadius, 0));

    return new THREE.LatheGeometry(points, 64);
  }, []);

  // Lapisan atas khusus kerak panggang keju
  const topCrustGeometry = useMemo(() => {
    const points: THREE.Vector2[] = [];
    const innerRadius = 0.6;
    const outerRadius = 1.6;
    const height = 0.95;

    points.push(new THREE.Vector2(innerRadius, height * 0.95));
    points.push(new THREE.Vector2((innerRadius + outerRadius) / 2, height * 1.055));
    points.push(new THREE.Vector2(outerRadius, height * 0.93));
    points.push(new THREE.Vector2(outerRadius - 0.08, height * 0.90));
    points.push(new THREE.Vector2((innerRadius + outerRadius) / 2, height * 1.02));
    points.push(new THREE.Vector2(innerRadius + 0.08, height * 0.92));

    return new THREE.LatheGeometry(points, 64);
  }, []);

  // Piring keramik putih
  const plateGeometry = useMemo(() => {
    const points: THREE.Vector2[] = [];
    points.push(new THREE.Vector2(0, -0.08));
    points.push(new THREE.Vector2(1.85, -0.08));
    points.push(new THREE.Vector2(2.05, -0.02));
    points.push(new THREE.Vector2(2.1, 0.05));
    points.push(new THREE.Vector2(2.02, 0.05));
    points.push(new THREE.Vector2(1.8, -0.02));
    points.push(new THREE.Vector2(0, -0.02));
    return new THREE.LatheGeometry(points, 48);
  }, []);

  // Ribuan parutan keju panggang di permukaan atas (Berdasarkan Gambar 4)
  const cheeseShreds = useMemo(() => {
    const items: Array<{
      position: [number, number, number];
      rotation: [number, number, number];
      scale: [number, number, number];
      color: string;
    }> = [];

    const cheeseColors = ["#F59E0B", "#D97706", "#FBBF24", "#B45309", "#FEF08A"];

    for (let i = 0; i < 280; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Jari-jari antara lubang tengah (0.7) sampai tepi luar (1.55)
      const radius = 0.75 + Math.random() * 0.75;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Tinggi kubah atas
      const archFactor = 1 - Math.abs(radius - 1.15) / 0.5;
      const y = 0.98 + Math.max(0, archFactor * 0.07) + (Math.random() * 0.02 - 0.01);

      items.push({
        position: [x, y, z],
        rotation: [
          Math.random() * 0.4 - 0.2,
          Math.random() * Math.PI,
          Math.random() * 0.4 - 0.2,
        ],
        scale: [
          0.025 + Math.random() * 0.015,
          0.012 + Math.random() * 0.01,
          0.09 + Math.random() * 0.09,
        ],
        color: cheeseColors[Math.floor(Math.random() * cheeseColors.length)],
      });
    }
    return items;
  }, []);

  return (
    <group
      ref={cakeGroupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, -0.4, 0]}
    >
      {/* Piring Saji Keramik Putih */}
      <mesh geometry={plateGeometry} material={plateMaterial} receiveShadow />

      {/* Badan Bolu Chiffon */}
      <mesh geometry={cakeGeometry} material={spongeMaterial} castShadow receiveShadow />

      {/* Lapisan Kerak Panggang Cokelat Keemasan */}
      <mesh geometry={topCrustGeometry} material={crustMaterial} castShadow />

      {/* Taburan Parutan Keju Cheddar Panggang */}
      {cheeseShreds.map((shred, idx) => (
        <mesh
          key={idx}
          position={shred.position}
          rotation={shred.rotation}
          scale={shred.scale}
          castShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={shred.color}
            roughness={0.6}
            metalness={0.1}
          />
        </mesh>
      ))}

      {/* Hiasan Garnish Daun Mint (Sesuai Gambar 4) */}
      <group position={[1.1, 1.05, 0.4]} rotation={[0.2, 0.8, -0.1]}>
        {/* Batang kecil */}
        <mesh material={stemMaterial} position={[0, -0.04, 0]} rotation={[0, 0, 0.1]}>
          <cylinderGeometry args={[0.012, 0.012, 0.08, 8]} />
        </mesh>

        {/* Daun 1 */}
        <mesh
          material={mintMaterial}
          position={[-0.04, 0.02, 0]}
          rotation={[0.3, -0.4, 0.5]}
          scale={[0.07, 0.02, 0.1]}
        >
          <sphereGeometry args={[1, 12, 12]} />
        </mesh>

        {/* Daun 2 */}
        <mesh
          material={mintMaterial}
          position={[0.04, 0.03, 0.03]}
          rotation={[-0.2, 0.6, -0.4]}
          scale={[0.065, 0.018, 0.09]}
        >
          <sphereGeometry args={[1, 12, 12]} />
        </mesh>
      </group>
    </group>
  );
}

// Efek Partikel Keju & Sparkles Melayang di Sekeliling Kue
function FloatingCheeseFlakes() {
  const particles = useMemo(() => {
    const list = [];
    const colors = ["#FBBF24", "#F59E0B", "#FEF3C7", "#FDE68A"];
    for (let i = 0; i < 40; i++) {
      const radius = 2.2 + Math.random() * 1.5;
      const angle = Math.random() * Math.PI * 2;
      list.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.3) * 2.2,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        size: 0.035 + Math.random() * 0.04,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.5 + Math.random() * 0.8,
      });
    }
    return list;
  }, []);

  return (
    <group>
      {particles.map((p, i) => (
        <Float
          key={i}
          speed={p.speed}
          rotationIntensity={1.5}
          floatIntensity={1.2}
          floatingRange={[-0.2, 0.2]}
        >
          <mesh position={p.position}>
            <dodecahedronGeometry args={[p.size, 0]} />
            <meshStandardMaterial
              color={p.color}
              emissive={p.color}
              emissiveIntensity={0.25}
              roughness={0.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Cake3DCanvas() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 2.5, 4.2], fov: 42 }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        {/* Pencahayaan Studio Hangat Toko Kue */}
        <ambientLight intensity={1.1} color="#FFFBEB" />

        {/* Key Light Utama dari Atas-Kanan */}
        <directionalLight
          position={[4, 5, 3]}
          intensity={2.2}
          color="#FFF7ED"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={15}
          shadow-camera-left={-3}
          shadow-camera-right={3}
          shadow-camera-top={3}
          shadow-camera-bottom={-3}
          shadow-bias={-0.0001}
        />

        {/* Fill Light Lembut dari Samping Kiri */}
        <directionalLight position={[-4, 2, -2]} intensity={0.9} color="#FEF3C7" />

        {/* Rim Light dari Belakang untuk Efek Glow Mengkilap */}
        <pointLight position={[0, 3, -3]} intensity={1.4} color="#FBBF24" />

        {/* Float Animation Halus untuk Seluruh Bolu */}
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.3} floatingRange={[-0.08, 0.08]}>
          <ChiffonCakeMesh />
        </Float>

        {/* Partikel Keju Melayang */}
        <FloatingCheeseFlakes />

        {/* Bayangan Halus di Dasar Meja */}
        <ContactShadows
          position={[0, -0.65, 0]}
          opacity={0.65}
          scale={5.5}
          blur={2.4}
          far={3}
          color="#451A03"
        />

        {/* Orbit Controls (Bisa diputar 360° oleh pengguna) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4.5} // Batas kemiringan atas
          maxPolarAngle={Math.PI / 2.1} // Batas agar tidak melihat dari bawah piring
          rotateSpeed={0.8}
        />
      </Canvas>

      {/* Petunjuk Interaksi 3D */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F3E8D8] text-xs font-medium text-[#786C65] shadow-xs flex items-center gap-1.5 pointer-events-none">
        <span className="inline-block w-2 h-2 rounded-full bg-[#EA580C] animate-pulse"></span>
        Geser mouse / sentuh untuk putar 360°
      </div>
    </div>
  );
}
