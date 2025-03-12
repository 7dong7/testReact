import "./Editor.css"
import { useState, useRef, useContext } from "react";

// 사용할 컨텍스트 불러오기
import { TodoDispatchContext } from "../App";

const Editor = () => {
    // context 를 사용해서 부모 컴포넌트의 데이터를 받을 수 있다
    // const data = useContext(TodoContext); // 공급받고하자는 컨텍스트 이름
    // 모든 data 를 불러오지 않고, 필요한 데이터만 구조 분해 할당을 사용해서 받는다
    const { onCreate } = useContext(TodoDispatchContext);


    const [content, setContent] = useState("");
    const contentRef = useRef();

    // input 태그 값이 바뀔 때 이벤트
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    // enter 를 치면 발생하는 이벤트
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }
    
    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    
    return (
        <div className={"Editor"}>
            <input
                ref={contentRef}
                value={content}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}
                placeholder={"새로운 todo..."}/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;