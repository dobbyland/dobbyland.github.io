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
				<Link to={`/`}>도비랜드</Link>
				<nav>
					<ul>
						<li>
							<Link to="/about">about</Link>
						</li>
						<li>
							<Link to="/portfolio">portfolio</Link>
						</li>
						<li>
							<Link to="/board/list/notice">notice</Link>
						</li>
						<li>
							<Link to="/inquiry">inquiry</Link>
						</li>
					</ul>
				</nav>
				<LoginBox>
					<button className={`sign_in`}>Sign in</button>
					<button className={`sign_up`}>Join us</button>
				</LoginBox>
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
		  li {
			  a {
				  text-transform: capitalize;
			  }
		  }
	  }
  }
`;

const Main = styled.main`
	min-height: calc(100vh - 300px);
`;

const Footer = styled.footer`
	margin-top: 50px;
  padding: 50px 30px;
	background-color: #E2EAF3;
`;

const Inner = styled.div`
	width: 1200px;
	margin: 0 auto;
`;

const LoginBox = styled.div`
  display: flex;
	column-gap: 20px;
	button {
		border: 1px solid ${theme.color.gray};
		padding: 15px 20px;
		border-radius: 10px;
	}
`;

export default App;