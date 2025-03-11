import "./List.css";
import TodoItem from "./TodoItem"
import {useState,useMemo} from "react";

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    // todo 제목 필터링 
    const getFilteredData = () => {
        if (search === "") { // 검색어가 없는 경우
            return todos;
        }

        // 검색어가 있는경우
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    const filteredTodos = getFilteredData();

    // 리렌더링 시에 매번 호출되고 있다
        // 새로운 todo 가 생성되거나, todo 가 삭제될 때 재연산을 해야된다
    // const getAnalyzedData = () => {
    //     console.log("getAnalyzedData 호출")
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo) => todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;
    //
    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     }
    // }

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    /**
     *  useMemo 안에 연산을 최초의 실행을 하고 반환한다
     *  그리고 deps 를 기준으로 메모라이즈 한다
     *
     *  [] -> 최초의 한번만 실행
     *  [todos] -> todos 의 변경을 감지해서 연산 실행
     *
     */
    // 최적화 useMemo 사용
    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    // 기억하고 싶은 연산을 넣는다
        console.log("getAnalyzedData 호출")
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos]); // 배열 -> deps



    return (
        <div className={"List"}>
            <h4>Todo List 📗</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder={"검색어를 입력하세요"}/>

            <div className="todos_wrapper">
                {
                    filteredTodos.map((todo) => {
                        return <TodoItem
                            // 반복문 사용시 객체의 구분자가 필요하다
                                    key={todo.id}
                                    {...todo}
                            // 이벤트 핸들러 전달
                                    onUpdate={onUpdate} 
                                    onDelete={onDelete} />
                    })
                }
            </div>
        </div>
    );
}

export default List;