import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

// styled components가 컴포넌트를 생성할 때, 아래와 같이 속성값을 설정할 수 있다.
const Input = styled.input.attrs({ required: true, minl\Legnth: 10 })`
    background-color: tomato;
`;

function App() {
    return (
        <Father as="header">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </Father>
    );
}

export default App;
