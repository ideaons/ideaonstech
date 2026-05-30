"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Scene Setup ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 3.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Particle Field ──
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = Math.random() * 2.8 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.65;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x8B5CF6,
      size: 0.015,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Secondary cyan particles ──
    const cyanPositions = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      const r = Math.random() * 3.5 + 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      cyanPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      cyanPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.4;
      cyanPositions[i * 3 + 2] = r * Math.cos(phi) * 0.5;
    }
    const cyanGeo = new THREE.BufferGeometry();
    cyanGeo.setAttribute("position", new THREE.BufferAttribute(cyanPositions, 3));
    const cyanMat = new THREE.PointsMaterial({
      color: 0x00E5FF,
      size: 0.01,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    const cyanParticles = new THREE.Points(cyanGeo, cyanMat);
    scene.add(cyanParticles);

    // ── Torus Knot Objects ──
    const makeTorusKnot = (color: number, pos: [number, number, number], scale: number) => {
      const geo = new THREE.TorusKnotGeometry(0.35, 0.1, 80, 20, 2, 3);
      const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.18 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      mesh.scale.setScalar(scale);
      scene.add(mesh);
      return mesh;
    };

    const orb1 = makeTorusKnot(0x8B5CF6, [1.6, 0.2, -1], 1.1);
    const orb2 = makeTorusKnot(0x00E5FF, [-1.8, -0.3, -0.8], 0.7);
    const orb3 = makeTorusKnot(0xA78BFA, [0.3, 1.0, -1.5], 0.5);

    // ── Lights (unused for wireframe but good for future) ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // ── Mouse tracking ──
    const mouse = { x: 0, y: 0 };
    const handleMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouse);

    // ── Animation Loop ──
    let rafId: number;
    const startTime = performance.now();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      particles.rotation.y = t * 0.025 + mouse.x * 0.12;
      particles.rotation.x = Math.sin(t * 0.015) * 0.08 + mouse.y * 0.06;

      cyanParticles.rotation.y = -t * 0.018 + mouse.x * 0.08;
      cyanParticles.rotation.x = Math.cos(t * 0.012) * 0.06;

      orb1.rotation.x = t * 0.15;
      orb1.rotation.z = t * 0.08;
      orb1.position.y = 0.2 + Math.sin(t * 0.4) * 0.18;

      orb2.rotation.x = t * 0.12;
      orb2.rotation.z = -t * 0.07;
      orb2.position.y = -0.3 + Math.sin(t * 0.35 + 1) * 0.16;

      orb3.rotation.x = -t * 0.1;
      orb3.rotation.z = t * 0.09;
      orb3.position.y = 1.0 + Math.sin(t * 0.45 + 2) * 0.12;

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ──
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      cyanGeo.dispose();
      cyanMat.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
