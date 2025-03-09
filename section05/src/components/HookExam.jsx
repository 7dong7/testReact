import { useState } from "react";
import useInput from "./../hooks/useInput";

/**
 *  3가지 hook에 대한 정보
 *  1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
 *
 *  2. 조건부로 호출될 수 없다 (반복문 포함)
 *
 *  3. 나만의 훅(custom hook) 을 직접 만들 수 있다.
 */

// 1. 외부에서는 hook 호출 불가능 , 컴포넌트 내부에서 호출되어야 한다
// const state = useState(); // 에러 발생


// 3-2. 그래서 외부에 함수를 만들어서 관리해보자 (3-4. hooks -> useInput.jsx 로 분리했다)
// function useInput() { // 함수 앞에 "use"를 접두사로 붙여서 만들면 react 는 내부적으로 custom 훅으로 생각한다
//     const [input, setInput] = useState(""); // 에러 발생 - 커스텀 훅 안에서 호출되어야 함
//
//     const onChange = (e) => {
//         setInput(e.target.value);
//         console.log(e.target.value);
//     };
//
//     return [input, onChange]
// }

const HookExam = () => {

    // const state = useState();

    // if (true) {
    //     // 2. 조건문,반복문 안에 hook 을 호출할 수 없다
    //     const state2 = useState(); // 에러 발생
    //         // 서로 다른 hook 들의 호출 순서로 인해 컴포넌트 내부가 꼬이게되는 걸 방지하기 위해서
    // }

    /**
     *  3-1. <input value={input} onChange={onChange}/> input 태그를 관리하기 위해서 위의 useState 선언 onChange 정의 등의 있다
     *      관리하기위한 구현이 좀 많은듯... ?
     */
    // const [input, setInput] = useState();
    //
    // const onChange = (e) => {
    //     setInput(e.target.value);
    // };

    // 3-3. 리턴값 호출
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();


    return (
        <div>
            <input value={input} onChange={onChange}/>
            <input value={input2} onChange={onChange2}/>
        </div>
    );
};


export default HookExam;