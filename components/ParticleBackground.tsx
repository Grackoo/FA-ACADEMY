import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Configuration
        const particleCount = 450;
        const maxDistance = 2.0;    
        const fieldSize = 14;      

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 7;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Append to DOM
        mountRef.current.appendChild(renderer.domElement);

        // State variables
        let mouseX = 0;
        let mouseY = 0;
        let animationFrameId: number;

        // --- SISTEMA DE RED (Plexus) ---
        const pPositions = new Float32Array(particleCount * 3);
        const pVelocities: THREE.Vector3[] = [];

        for (let i = 0; i < particleCount; i++) {
            pPositions[i * 3] = (Math.random() - 0.5) * fieldSize;
            pPositions[i * 3 + 1] = (Math.random() - 0.5) * fieldSize;
            pPositions[i * 3 + 2] = (Math.random() - 0.5) * fieldSize;
            
            pVelocities.push(new THREE.Vector3(
                (Math.random() - 0.5) * 0.005, 
                (Math.random() - 0.5) * 0.005, 
                (Math.random() - 0.5) * 0.005
            ));
        }

        const pGeometry = new THREE.BufferGeometry();
        pGeometry.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
        
        const pMaterial = new THREE.PointsMaterial({ 
            size: 0.03, 
            color: 0x00dfd8, // Cian Eléctrico
            transparent: true, 
            opacity: 0.5,
            blending: THREE.AdditiveBlending 
        });
        
        const particles = new THREE.Points(pGeometry, pMaterial);
        scene.add(particles);

        const lineMat = new THREE.LineBasicMaterial({ 
            color: 0x0070f3, // Azul Vercel / FA Academy
            transparent: true, 
            opacity: 0.15,
            blending: THREE.AdditiveBlending 
        });
        const lines = new THREE.LineSegments(new THREE.BufferGeometry(), lineMat);
        scene.add(lines);

        // Luz suave para el volumen
        const blueLight = new THREE.PointLight(0x0070f3, 5, 20);
        blueLight.position.set(0, 0, 5);
        scene.add(blueLight);

        // Event Listeners
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX - window.innerWidth / 2) / 250;
            mouseY = (e.clientY - window.innerHeight / 2) / 250;
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // Animation Loop
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            // Parallax sutil basado en el ratón
            scene.rotation.y += (mouseX * 0.15 - scene.rotation.y) * 0.03;
            scene.rotation.x += (mouseY * 0.15 - scene.rotation.x) * 0.03;

            const positions = particles.geometry.attributes.position.array as Float32Array;
            const linePositions: number[] = [];

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] += pVelocities[i].x;
                positions[i * 3 + 1] += pVelocities[i].y;
                positions[i * 3 + 2] += pVelocities[i].z;

                const limit = fieldSize / 2;
                if (Math.abs(positions[i * 3]) > limit) pVelocities[i].x *= -1;
                if (Math.abs(positions[i * 3 + 1]) > limit) pVelocities[i].y *= -1;
                if (Math.abs(positions[i * 3 + 2]) > limit) pVelocities[i].z *= -1;

                // Conexiones dinámicas
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = positions[i * 3] - positions[j * 3];
                    const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                    const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                    const distSq = dx * dx + dy * dy + dz * dz;

                    if (distSq < maxDistance * maxDistance) {
                        linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                        linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
                    }
                }
            }

            particles.geometry.attributes.position.needsUpdate = true;
            lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            
            // Clean up Three.js resources
            pGeometry.dispose();
            pMaterial.dispose();
            lines.geometry.dispose();
            lineMat.dispose();
            blueLight.dispose();
            renderer.dispose();
            
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="fixed inset-0 w-full h-full z-0"
            style={{ backgroundColor: 'var(--bg-dark, #050505)' }}
        />
    );
};

export default ParticleBackground;
