import {useReducer} from "react";

// 상태 변화 함수는 직접 정의
function reducer(state, action) { // reducer: 변환기를 뜻한다 - 상태를 실제로 변환시키는 역할을 한다
    switch (action.type) {
        case "INCREASE": return state + action.data; // 증가 요청
        case "DECREASE": return state - action.data; // 감소 요청
        default: state; // 잘못된 요청
    }
}

// Exam 컴포넌트
const Exam = () => {
    // 상태, 상태변화를 요청하기만 하는 객체 -> 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0); // 인수는 처리 메소드를 넣는다, State 의 초기값

    // 값 증가
    const onClickPlus = () => {
        // 인수: 상태가 어떻게 변화되기를 원하는지 전달
            // 액션 객체
        dispatch({
            type: "INCREASE", // 원하는 상태 변화
            data: 1 // 1 만큼
        })
    };

    const onClickMinus = () => {
        dispatch({
            type:"DECREASE",
            data:1
        })
    }
    
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )
}

export default Exam;