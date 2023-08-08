import { useState } from 'react';

const App = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
  
	window.addEventListener('resize', () => {
	  setWidth(window.innerWidth);
	  setHeight(window.innerHeight);
	});
  
	return (
	  <div>
		<h2>
			conditional_render_window_size React App
		</h2>
		<p>The window width is {width}px.</p>
		<p>The window height is {height}px.</p>
	  </div>
	);
  };

  export default App;