import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from './components/Even';
import {useState, useEffect, useRef} from "react";

/**
 *  section으로 구분한 이유는 컴포넌트들 마다 다른 배경을 보여주기 위함이다
 *
 *  JSX 에서 class 가 아니라 className 을 사용하는 이유는
 *      자바스크립트에서 class 라는 단어가 클래스 선언에 사용되는 예약어이기 때문이다
 *
 *  어디서 useState 를 선언해야 되는가?
 *  Viewer, Controller, App
 *  App 에서 구현해야 한다
 *      count 는 Viewer 컴포넌트로 보낸다
 *      onClickButton 함수를 만들어서 Controller 컴포넌트로 보낸다
 *
 *  컴포넌트끼리 값을 전해주고 변경하려면 서로 부모관계야 한다.
 *      App -> Viewer
 *      App -> Controller
 *
 *      Viewer 와 Controller 와는 관계가 없다
 *  부모에서 자식한테만 state 를 전달할 수 있다 (State Lifting)
 */
function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    const isMount = useRef(false); // 리랜더링 되었는지 확인
    /**
     *  인수
     *  첫번째: 콜백
     *
     *  두번째: 배열
     *      안에 들어있느 값이 변경되면 사이드 이펙트 발생
     *      의조성 배열 (dependency array) - deps 라고 부른다
     *      
     *  useEffect
     *  1. 마운트: 탄생
     *  2. 업데이트: 변환, 리렌더링
     *  3. 언마운트: 죽음
     */
    // useEffect(() => {
    //     console.log(`count: ${count} / input: ${input}`);
    // }, [count, input]);

    // 1. 마운트: 탄생 - deps(의존배열) 이 비어있는 경우 최초의 한번만 실행된다
    useEffect(() => {
        console.log("mount")
    }, []);

    // 2. 업데이트: 변환, 리렌더링 - deps(의존배열) 부분을 없애면 모든 리랜더링에 반응하게 된다
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
    });

    // 3. 언마운트: 죽음


    
    const onClickButton = (value) => {
        setCount(count + value);
        // console.log(count) // setCount 의 경우 비동기로 실행되기 때문에 원하는 결과를 얻지 못할 수 있다
            // useEffect 를 사용하면 값의 변경을 감지해서 실행시켜주기 때문에 사이드 이펙트에 적합하다
    };

  return (
    <div className={"App"}>
        <h1>Simple Counter</h1>
        <section>
            <input value={input} onChange={(e) => {
                setInput(e.target.value);
            }}/>
        </section>
        <section>
            <Viewer count={count}/>
            {count % 2 === 0? <Even /> : null}
        </section>

        <section>
            <Controller onClickButton={onClickButton}/>
        </section>
    </div>
  )
}

export default App
