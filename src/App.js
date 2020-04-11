import React from 'react';
import './scss/style.scss';

function App() {
  return (
<header class="showcase">
			<div class="container">
				<nav>
					<h1 class="logo">My Website</h1>
					<ul>
						<li><a href="#1">Home</a></li>
						<li><a href="#1">About</a></li>
						<li><a href="#1">Services</a></li>
					</ul>
				</nav>

				<div class="showcase-content">
					<div>
						<h1>Make Your Marketing Real</h1>
						<p class="my-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
							vitae dolore.
						</p>
						<a href="#1" class="btn-primary">Learn More</a>
						<a href="#1" class="btn-secondary">Sign Up</a>
					</div>
					<img
						src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" alt='landing'
					/>
				</div>
			</div>
		</header>
  );
}

export default App;
