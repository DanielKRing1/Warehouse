import styled from "styled-components";

type ButtonProps = {};
const Button = styled.button<ButtonProps>`
    cursor: pointer;
    border-radius: 1rem;
    padding: 1rem 1rem;
    margin: 1rem;
`;

export default Button;
