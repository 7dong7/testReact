import './App.css'
import HookExam from "./components/HookExam";

// import {useState} from "react"; // react State 를 사용하기 위해서
// import Register from "./components/Register";
// import Counter from "./components/Counter";
// import Bulb from "./components/Bulb";
// import Header from "./components/Header"; // 확장자를 붙이지 않아도 된다
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button"


function App() {

    return (
        <>
            <HookExam />
        </>
    );
}

// function App() {
//     return (
//         <>
//             <Register />
//         </>
//     );
// }


// /**
//  *  랜더링 되는경우
//  *  1. Probs 의 변경
//  *  2. State 의 변경 (본인이 관리하는)
//  *  3. 부모의 리랜더링
//  */
// function App() {
//     // 인수의 첫번째 => 초기값
//     //       두번째 => 상태를 변화시키는 함수
//     const [count, setCount] = useState(0); // 첫번째 값은 내가 설정한 값
//     const [light, setLight] = useState("OFF");
//
//     /**
//      *  첫번째 렌더링과 리랜더링에 대해서
//      *
//      *  새로고침을 하게 되면 0으로 출력되고, +를 누를때마다 값이 하나씩 올라간다
//      *
//      *  let light = "OFF" 이렇게 설정하고 값을 변경시키는 걸로 구현하지 않는 이유는
//      *  useState() 를 사용해서 state 를 변경해야지 "리렌더링" 이 이루아지기 때문이다
//      */
//     return (
//         <>
//             <Bulb />
//             <Counter /> {/* 일렇게 하면 위의 light 는 리랜더링이 일어나지 않는다 */}
//         </>
//     );
// }

// function App() { // App 컴포넌트는 부모 컴포넌트, Header 는 자식 컴포넌트
//
//     const buttonProps ={
//         text: "메일",
//         color: "red",
//         a: 1,
//         b: 2,
//         c: 3,
//     }
//
//   return (
//     <>
//         <Button {...buttonProps} />
//         <Button text={"카페"}/>
//         <Button text={"블로그"}>
//             <Header /> {/* 태그 말고 Header 와 같은 컴포넌트도 가보낼 수 있다*/}
//             {/*<div>자식 요소</div>*/}
//         </Button>
//     </>
//   )
// }



/**
 *  아래의 function 과 똑같다
 *  화살표 함수로 만드는건 똑같다
 *  컴포넌트로 만드는 경우 반드시 "대문자"로 시작할 것
 *
 *  Header 컴포넌트를 다른 파일 생성한다
 */
// const Header = () => {
//     return (
//         <hader>
//             <h1>header</h1>
//         </hader>
//     );
// }

/**
 *  html 을 반환하는 함수를 컴포넌트라고 한다 => function App 이 컴포넌트
 *  App 컴포넌트라고 부른다 (함수형으로 만든경우 "함수 컴포넌트" 라고 부른다)
 *  가장 위에 있는 컴포넌트를 Root 컴포넌트라고 부른다
 *
 *  App 아래에 Header, Main, Footer 가 자식으로 존재한다
 */
/*function App() { // App 컴포넌트는 부모 컴포넌트, Header 는 자식 컴포넌트
  return (
    <>
        <Header /> {/!* 이렇게 작성하게 되면 main 에서 App 컴포넌트를 불러올 때 App 안에 있는 Header 컴포넌트를 같이 가지고 간다 *!/}
        {/!* Header 와 같이 컴포넌트 안에 포함되어서 랜더링 되는 컴포넌트를 자식 컴포넌트라고 한다 *!/}
        <Main/>
        <Footer/>
    </>
  )
}*/

export default App
