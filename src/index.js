import { createRoot } from 'react-dom/client';
import { Experience } from './Experience.jsx';
import './styles.css';
import { Canvas } from '@react-three/fiber';

const root = createRoot(document.getElementById('root'));

const ContainerRoot = () => (
  <Canvas
    camera={{
      position: [0, 0, 200], // Posición de la cámara
      
    }}
  >
    <Experience />
  </Canvas>
);

root.render(<ContainerRoot />);
