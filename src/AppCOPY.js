import Navbar from './components/Navbar';
import { useRef } from 'react';

export default function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <div>
		<h1>
			conditional_render_window_size react app
		</h1>
		<Navbar width={windowSize.current[0]} 
			height={windowSize.current[1]}/>
    </div>
  );
}