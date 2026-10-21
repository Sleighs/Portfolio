import React, { useContext, useEffect, useRef } from 'react';
import './style.css';
import { DataContext } from '../../Context/DataContext';

const Sparkle = (props) => {
  const { 
    parentRef,
    sectionType,
  } = props;

  const { sparkleCount, sparkleSize } = useContext(DataContext);

  const canvasRef = useRef(null);
  

  useEffect(() => {
    const canvas = canvasRef?.current;
    const ctx = canvas.getContext('2d');
    const sparkles = [];
    let pageHeight = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      pageHeight = Math.max(
        window.innerHeight,
        parentRef?.current?.scrollHeight || document.documentElement.scrollHeight
      );
    };


    class Sparkle {
      constructor(x, y, size, speedX, speedY, opacity, color) {
        this.x = x;
        this.y = y;
        // Random size between 50-100% of sparkleSize
        this.size = (Math.random() * 0.5 + 0.5) * size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.opacity = opacity;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y - window.scrollY, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.001;
        if (this.opacity <= 0) {
          this.reset();
        }
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * pageHeight;
        // Random size between 50-100% of sparkleSize
        this.size = (Math.random() * 0.5 + 0.5) * sparkleSize;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random();
        this.color = Math.random() < 0.5 ? '255, 255, 255' : '255, 77, 70'; // White or Red

        //console.log('reset', this.speedX, this.speedY);
      }
    }

    function initSparkles() {
      const numSparkles = Math.ceil(sparkleCount * pageHeight / canvas.height);
      for (let i = 0; i < numSparkles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * pageHeight;
        const speedX = (Math.random() - 0.5) * 0.1;
        const speedY = (Math.random() - 0.5) * 0.1;
        const opacity = Math.random();
        const color = Math.random() < 0.5 ? '255, 255, 255' : '255, 77, 70'; // White or Red
        sparkles.push(new Sparkle(x, y, sparkleSize, speedX, speedY, opacity, color));
      }
    }

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparkles.forEach(sparkle => {
        sparkle.update();
        sparkle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    sparkles.length = 0; // Clear existing sparkles
    initSparkles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    const resizeObserver = parentRef?.current
      ? new ResizeObserver(resizeCanvas)
      : null;
    if (resizeObserver) {
      resizeObserver.observe(parentRef.current);
    }
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      resizeObserver?.disconnect();
      cancelAnimationFrame(animationFrameId);
      sparkles.length = 0; // Clean up sparkles on unmount
    };
  }, [parentRef, sparkleCount, sparkleSize]); // Add dependencies


  return (
    <div style={{ 
      position: 'fixed',
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0, 
      pointerEvents: 'none' 
    }}>
      <canvas ref={canvasRef} 
        className="sparkle-canvas"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default Sparkle;
