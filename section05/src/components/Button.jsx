/**
 *  children 의 경우 App 의 마지막 버튼의 <div> 태그를 자식으로 가져왔다
 * @param children
 * @param text
 * @param color
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({ children, text, color = "black"}) => {
    return (
        <button style={{color: color}}>
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