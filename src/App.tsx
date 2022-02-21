import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import styled from "styled-components";
import theme from "./theme";

function App() {
	return (
		<>
			<Header>
				<Link to={`/`}>DL</Link>
				<nav>
					<ul>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/portfolio">Portfolio</Link>
						</li>
						<li>
							<Link to="/board/list/notice">MEGAPHONE</Link>
						</li>
						<li>
							<Link to="/inquiry">Inquiry</Link>
						</li>
					</ul>
				</nav>
				<LogginBox>
					<button className={`sign_in`}>Sign in</button>
					<button className={`sign_up`}>Join us</button>
				</LogginBox>
			</Header>
			<Main>
				<Inner>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Inner>
			</Main>
			<Footer>
				<p>Gh, IG</p>
			</Footer>
		</>
	);
}
const Header = styled.header`
  display: flex;
  justify-content: space-between;
	align-items: center;
	padding: 35px 30px;
  nav {
	  flex: 0 0 500px;
	  ul {
		  
    	display: flex;
		  justify-content: space-between;
	  }
  }
`;

const Main = styled.main`
	min-height: calc(100vh - 300px);
`;

const Footer = styled.footer`
	margin-top: 50px;
  padding: 50px 30px;
	background-color: ${theme.color.brand};
`;

const Inner = styled.div`
	width: 1200px;
	margin: 0 auto;
`;

const LogginBox = styled.div`
  display: flex;
	column-gap: 12px;
	button {
		border: 1px solid ${theme.color.default};
		padding: 20px;
	}
`;

export default App;