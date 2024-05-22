import React, { useEffect, useRef } from 'react';

const Sparkle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const sparkles = [];
    const numSparkles = 10;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Sparkle {
      constructor(x, y, size, speedX, speedY, opacity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.opacity = opacity;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.01;
        if (this.opacity <= 0) {
          this.reset();
        }
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random();
        //console.log('reset', this.speedX, this.speedY);
      }
    }

    function initSparkles() {
      for (let i = 0; i < numSparkles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        const opacity = Math.random();
        sparkles.push(new Sparkle(x, y, size, speedX, speedY, opacity));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparkles.forEach(sparkle => {
        sparkle.update();
        sparkle.draw();
      });
      requestAnimationFrame(animate);
    }

    initSparkles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      sparkles.length = 0;
      initSparkles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 1,
      }} />
    );
};

export default Sparkle;
