import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
const Btn = styled.button`
    background-color: tomato;
    border: 0;
`;

const Text = styled.span`
    color: white;
`;

function App() {
    return (
        <Father>
            <Btn>Log in</Btn>
        </Father>
    );
}

export default App;
