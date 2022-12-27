import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

// styled.div<ContainerProps> : Container 가 받는 props를 TypeScript에게 설명해준다.
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string; // ? 을 작성하면 필수 요소가 아니라 선택 요소임을 나타낸다.
}

function Circle({ bgColor, borderColor }: CircleProps) {
    return (
        // borderColor 에서 사용한 ?? 의미 >> borderColor의 초기값을 bgColor으로 선언해준다.
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
    );
}

export default Circle;
