import './App.css'
import Header from "./components/Header"; // 확장자를 붙이지 않아도 된다
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button"


function App() { // App 컴포넌트는 부모 컴포넌트, Header 는 자식 컴포넌트
    
    const buttonProps ={
        text: "메일",
        color: "red",
        a: 1,
        b: 2,
        c: 3,
    }
    
  return (
    <>
        <Button {...buttonProps} />
        <Button text={"카페"}/>
        <Button text={"블로그"}>
            <Header /> {/* 태그 말고 Header 와 같은 컴포넌트도 가보낼 수 있다*/}
            {/*<div>자식 요소</div>*/}
        </Button>
    </>
  )
}



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
