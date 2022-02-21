import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Logo from "assets/img/logo.jpg";
import Home from './pages/Home';
import About from './pages/About';
import styled from "styled-components";
import theme from "./theme";

function App() {
	return (
		<>
			<Header>
				<HeaderTop>
					<div className={`logo_wrap`}>
						<Link className={`logo`} to={`/`} title={`홈`}>
							<img src={Logo} alt="도비랜드"/>
						</Link>
					</div>
					<nav className={`gnb`}>
						<ul>
							<li>
								<Link to="/about">우리는요</Link>
							</li>
							<li>
								<Link to="/portfolio">포트폴리오</Link>
							</li>
							<li>
								<Link to="/service">브랜드</Link>
							</li>
							<li>
								<Link to="/board/notice/list">공지사항</Link>
							</li>
						</ul>
					</nav>
					<LoginBox className={`login_box`}>
						<button className={`sign_in`}>연락하기</button>
					</LoginBox>
				</HeaderTop>
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
				<Inner className={`site_link`}>
					<nav>
						<Link to={`invachu`}>인바츄</Link>
					</nav>
				</Inner>
				<Inner className={`info`}>
					<nav>
						<Link to={`/termsofuse`}>이용약관</Link>
						<Link to={`/we-do-not-want-to-collection-of-email`}>이메일무단수집거부</Link>
					</nav>
					<div className={`info_warp`}>
						<p>서울특별시 관악구 남부순환로 141가길 16, 도비랜드</p>
						<p>Copyrights &copy; DOBBYLAND 2022</p>
					</div>
				</Inner>
			</Footer>
		</>
	);
}
const Header = styled.header`
	border-bottom: 1px solid ${theme.color.gray_light};
`;

const HeaderTop = styled.div`
	display: flex;
	align-items: center;
	padding: 0 150px;
	height: 120px;
	.logo_wrap {
		width: 250px;
		.logo {
			display: block;
			width: 64px;
			height: 64px;
		}
		img {
			width: 100%;
			border-radius: 10px;
		}
	}
	.gnb {
		flex: 1;
		height: 100%;
		ul {
			display: flex;
			justify-content: center;
			column-gap: 100px;
			height: 100%;
			li {
				a {
					display: flex;
					align-items: center;
					font-weight: 700;
					font-size: 20px;
					height: 100%;
					text-transform: capitalize;
					padding: 0 10px;
				}
			}
		}
	
	}
	.login_box {
		width: 250px;
		justify-content: flex-end;
	}
`;

const Main = styled.main`
	min-height: calc(100vh - 300px);
	background-color: #f4f9fd;
`;

const Footer = styled.footer`
	margin-top: 80px;
	.info {
		display: flex;
		flex-direction: column;
		row-gap: 15px;
		border-top: 1px solid #c4c4c4;
		padding-top: 15px;
		padding-bottom: 100px;
		nav {
			display: flex;
			column-gap: 15px;
		}
		p {
			font-size: 14px;
		}
	}
	
	.site_link {
		padding-bottom: 15px;
		nav {
			a {
				font-weight: 700;
				font-size: 15px;
			}
		}
	}
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
		opacity: 0.4;
		&:hover {
			opacity: 1;
		}
	}
`;

export default App;