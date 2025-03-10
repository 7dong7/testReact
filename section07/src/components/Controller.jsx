// 카운트 앱 컨트롤러
const Controller = ({onClickButton}) => {

    const buttonValues = [-1, -10, -100, 100, 10, 1];

    return (
        <div>
            <button onClick={() => {
                onClickButton(-1);
            }}>
                -1
            </button>
            <button onClick={() => {
                onClickButton(-10);
            }}>
                -10
            </button>
            <button onClick={() => {
                onClickButton(-100);
            }}>
                -100
            </button>
            <button onClick={() => {
                onClickButton(100);
            }}>
                +100
            </button>
            <button onClick={() => {
                onClickButton(10);
            }}>
                +10
            </button>
            <button onClick={() => {
                onClickButton(1);
            }}>
                +1
            </button>
        </div>
    );
};

export default Controller;