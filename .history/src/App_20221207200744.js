import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
const Btn = styled.button`
    background-color: tomato;
    border: 0;
    border-radius: 15px;
    color: #fff;
    text-decoration: none;
`;

function App() {
    return (
        <Father>
            <Btn>Log in</Btn>
            {/* as : HTML 부분을 바꿔서 a를 전달할거야. */}
            <Btn as="a" href="/">
                Log in
            </Btn>
        </Father>
    );
}

export default App;
