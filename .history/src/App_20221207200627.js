import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
const Btn = styled.button`
    background-color: tomato;
    border: 0;
    border-radius: 15px;
`;

function App() {
    return (
        <Father>
            <Btn>Log in</Btn>
        </Father>
    );
}

export default App;
