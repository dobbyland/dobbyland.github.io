import styled from "styled-components";

const Button = styled.button`
	color: ${props => props.color};
	border: 1px solid ${ props => props.theme.color.brand };
`;

export default Button;