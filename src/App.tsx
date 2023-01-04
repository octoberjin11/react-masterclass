import { useState } from "react";

function App() {
    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        // event: React.FormEvent<HTMLInputElement>
        // 이 onChange 함수가 InputElement에 의해서 실행될 것을 알림.

        const {
            currentTarget: { value },
        } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hello", value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder="username"
                />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default App;
