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

const Input = styled.input.attrs({ required: true })`
    background-color: tomato;
`;

function App() {
    return (
        <Father as="header">
            <Input />
        </Father>
    );
}

export default App;
