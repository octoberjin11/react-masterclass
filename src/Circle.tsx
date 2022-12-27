import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
}

// styled.div<ContainerProps> : Container 가 받는 props를 TypeScript에게 설명해준다.
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

interface CircleProps {
    bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} />;
}

export default Circle;
