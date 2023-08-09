import { useState } from 'react';
import About from './About.js';
import Posts from './Posts.js';

let Navbar = () => {


	let [width, setWidth] = useState(0);
	let [height, setHeight] = useState(0);
  
	window.addEventListener('load', () => {
	  setWidth(window.innerWidth);
	  setHeight(window.innerHeight);
	});

	window.addEventListener('resize', () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	  });

	return(
		<div>
			<h4>
				Navbar now ...
			</h4>
			<h3>
				Hi1 da Window width is {width}.
			</h3>

			<h3>
				Hi2 da Window height is {height}.
			</h3>
		</div>
	// rest of the code..
	); 
};

export default Navbar;