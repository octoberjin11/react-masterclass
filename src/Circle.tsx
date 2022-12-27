import styled from "styled-components";

interface CircleProps {
    bgColor: string;
}

// styled.div<ContainerProps> : Container 가 받는 props를 TypeScript에게 설명해준다.
const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} />;
}

export default Circle;
