import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

import { useState, useRef, useReducer, useCallback, createContext, useMemo } from "react";

// 임시 데이터 생성
const mockData = [
    {
        id:0,
        isDone: false,
        content: "react 공부하기",
        date: new Date().getTime(),
    },
    {
        id:1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id:2,
        isDone: false,
        content: "노래 연습",
        date: new Date().getTime(),
    }
]

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state]; // 새로운 todoItem, 기존 todoItems
        case 'UPDATE':
            return state.map((item) => item.id === action.targetId
                ? {...item, isDone: !item.isDone}
                : item);
        case 'DELETE' :
            return state.filter((item) => item.id !== action.targetId)
        default:
            return state;
    }
}

// 컨텍스트는 보통 App 외부에 선언한다
    // export 를 해주어야 자손 컴포넌트들에서 불러올 수 있다
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
    // todo 작업
    const [todos, dispatch] = useReducer(reducer, mockData);
    // const [todos, setTodos] = useState(mockData); // 초기값 빈 데이터
    const idRef = useRef(3);

    // 새로운 todo 생성하고 todoList 에 추가하기
    const onCreate = useCallback((content) => {
        dispatch({
            type:"CREATE",
            data: {
                id:idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime()
            }
        })
    },[]);

    // 체크박스 값 변경하기 (todo 값 변경하기)
    const onUpdate = useCallback((targetId) => {
        // todos State 의 값들 중에
        // target Id 와 일치하는 값을 갖는 todo 아이템의 isDone 변경
        dispatch({
            type: "UPDATE",
            targetId: targetId
        })
    }, []);
    
    /**
     *  함수를 최적화하는 방법 ( useCallback )
     *  
     *  [] -> 최초의 레더링에만 함수 생성
     */
    const onDelete = useCallback((targetId) => {
        // todos 배열에서 targetId와 일치하는 Id를 갖는 요소만 삭제한 배열을 넣어주면 된다
        dispatch({
            type: "DELETE",
            targetId: targetId
        });
    }, []);

    
    const memorizedDispatch = useMemo(()=>{
        return {onDelete, onUpdate, onCreate};
    }, []) // 빈 배열 한번만
    /**
     *  React.memo 사용
     *  Header 의 경우 리렌더링이 계속 일어날 이유가 없다 (변하지 않으니까)
     */
  return (
    <div className={"App"}>
        <section>
            <Header />
        </section>
        {/* TodoContext.Provider 를 사용하면 자식 컴포넌트(자손 컴포넌트 포함) 들에게 데이터를 전달할 수 있다
            Provider 를 붙여서 제공하고자 하는 데이터를 선언한다 */}
        <TodoStateContext.Provider value={todos}> {/* state */}
            <TodoDispatchContext.Provider value={memorizedDispatch}> {/* 함수 useMemo 사용 리렌더링 X */}
                <section>
                    <Editor />
                </section>
                <section>
                    <List />
                </section>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    </div>
  )
}

export default App
