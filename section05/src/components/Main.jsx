/**
 *  JSX 주의
 *  1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
 *      {if()}, {for()} 불가능
 *  2. 숫주, 문자열, 배열 값만 랜더링 된다
 *  3. 모든 태그는 닫혀 있어야 한다
 *  4. 최상위 태그는 반드시 하나여야 한다
 */
import "./Main.css";

const Main = () => {
    const user = {
        username : "이정",
        isLogin : true
    }

    if (user.isLogin) {
        return <div className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
        // 위 아래의 차이는 없다
    // return (
    //     <>
    //         {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // );


    // const number = 10; // jsx 문법
    // const obj = {
    //     a : 10
    // }
    //
    // return (
    //     <main>
    //         <h1>main</h1>
    //         <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
    //         <h2>{number + 10}</h2>
    //         {obj.a}
    //     </main>
    // );
}

export default Main;