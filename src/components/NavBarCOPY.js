import About from './About.js';
import Posts from './Posts.js';


let Navbar = (props) => {
	const winWidth = props.width
	const winHeight = props.height

	return(
		<div>
			<h4>
				Hey hey
			</h4>
			<h3>
				Hi1 da Window width is {winWidth}.
			</h3>

			<h3>
				Hi2 da Window height is {winHeight}.
			</h3>
		</div>
	// rest of the code..
	); 
};

export default Navbar;