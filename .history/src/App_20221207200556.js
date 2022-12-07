import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
const Btn = styled.button`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
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
