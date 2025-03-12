import "./List.css";
import TodoItem from "./TodoItem"
import {useState,useMemo,useContext} from "react";
import {TodoStateContext} from "../App";

const List = () => {
    // {todos, onUpdate, onDelete}
    const todos = useContext(TodoStateContext);

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
                                    {...todo}/>
                    })
                }
            </div>
        </div>
    );
}

export default List;