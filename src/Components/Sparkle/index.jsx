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
    const numSparkles = sparkleCount;

    const resizeCanvas = () => {
      if (parentRef?.current) {
        const { width, height } = parentRef.current.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
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
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.006;
        if (this.opacity <= 0) {
          this.reset();
        }
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
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
      for (let i = 0; i < numSparkles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        const opacity = Math.random();
        const color = Math.random() < 0.5 ? '255, 255, 255' : '255, 77, 70'; // White or Red
        sparkles.push(new Sparkle(x, y, sparkleSize, speedX, speedY, opacity, color));
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

    resizeCanvas();
    sparkles.length = 0; // Clear existing sparkles
    initSparkles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      sparkles.length = 0; // Clean up sparkles on unmount
    };
  }, [parentRef, sparkleCount, sparkleSize]); // Add dependencies


  return (
    <div style={{ 
      position: parentRef === null ? 'fixed' : 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0, 
      pointerEvents: 'none' 
    }} >
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
