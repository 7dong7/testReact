/**
 *  children 의 경우 App 의 마지막 버튼의 <div> 태그를 자식으로 가져왔다
 * @param children
 * @param text
 * @param color
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({ children, text, color = "black"}) => {

    // 이런 이벤트가 발생할때는 이벤트 객체를 같이 보낸다
        // SyntheticBaseEvent: 합성 이벤트 객체를 말한다
        // 합성 이벤트 객체는 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태 (크롬, 사파리, 엣지, 웨일, 파폭 등)
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return (
        <button onClick={onClickButton} // 콜백함수를 전달하듯이 ()를 빼고 전달한다
            // onMouseEnter={onClickButton}
        // <button onClick={() => {
        //     console.log(text);
        // }} // 이벤트를 처리하는 함수를 이벤트 핸들러라고 한다
            style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

// const Button = ( props ) => {
//     const {text, color, a, b, c} = props;
//
//     return (
//         <button style={{color: color}}>
//             {text} - {color}
//             {a}, {b}, {c}
//         </button>
//     );
// };

export default Button;