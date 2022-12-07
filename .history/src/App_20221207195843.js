import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
`;

// styled(확장하려는 컴포넌트 이름)
// Box의 모든 속성들을 들고 온 다음
// 추가적으로 border-radius: 50px;만 더해줌
const Circle = styled(Box)`
    border-radius: 50px;
`;

const Text = styled.span`
    color: white;
`;

function App() {
    return (
        <Father>
            <Box bgColor="teal">
                <Text>Hello</Text>
            </Box>
            <Circle bgColor="tomato" />
        </Father>
    );
}

export default App;
