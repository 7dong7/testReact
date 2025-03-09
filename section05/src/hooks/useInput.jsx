import {useState} from "react";

function useInput() { // 함수 앞에 "use"를 접두사로 붙여서 만들면 react 는 내부적으로 custom 훅으로 생각한다
    const [input, setInput] = useState(""); // 에러 발생 - 커스텀 훅 안에서 호출되어야 함

    const onChange = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    };

    return [input, onChange]
}

export default useInput;