import React, { useRef, useEffect } from 'react';

const ParticleVortex = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Mouse state
    let mouse = { x: -1000, y: -1000, isActive: false };
    let mouseTimeout;

    // Handle Resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener('resize', resize);

    // Mouse Tracking
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
      
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.isActive = false;
      }, 1500); // Particles calm down after 1.5s of no movement
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle Class
    class Particle {
      constructor(x, y) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 0.5;
        this.density = (Math.random() * 15) + 1;
        
        // Cyberpunk colors: Fuchsia, Deep Purple, Cyan
        const colors = ['#e879f9', '#d946ef', '#c026d3', '#a855f7', '#06b6d4'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      draw(opacity) {
        ctx.globalAlpha = opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(opacity) {
        if (mouse.isActive) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let maxDistance = 350; // Radius of attraction
          
          if (distance < maxDistance) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (maxDistance - distance) / maxDistance;
            
            // Tangential (Vortex) Math
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;
            
            // The spinning vortex effect
            this.x -= directionX + (forceDirectionY * force * 8);
            this.y -= directionY - (forceDirectionX * force * 8);
          } else {
            // Slowly drift back to base if outside vortex
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX;
              this.x -= dx / 30;
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY;
              this.y -= dy / 30;
            }
          }
        } else {
          // Calmly return to base position when idle
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
        }
        this.draw(opacity);
      }
    }

    // Initialize Particles
    const initParticles = () => {
      particles = [];
      // Calculate how many particles to draw based on screen size (less density for cleaner look)
      const numberOfParticles = (canvas.width * canvas.height) / 4000; 
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    let globalOpacity = 0;

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Global fade in/out logic
      if (mouse.isActive && globalOpacity < 0.8) {
        globalOpacity += 0.05;
      } else if (!mouse.isActive && globalOpacity > 0) {
        globalOpacity -= 0.02;
      }
      
      // Draw and update if visible
      if (globalOpacity > 0.01) {
        for (let i = 0; i < particles.length; i++) {
          particles[i].update(globalOpacity);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
    />
  );
};

export default ParticleVortex;
