import "./TodoItem.css"
import {memo, useContext} from 'react';

import { TodoDispatchContext } from "../App";

const TodoItem = ({id, isDone, content, date}) => {
    // {id, isDone, content, date, onUpdate, onDelete}
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

    // todo 수정 
    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    // todo 삭제
    const onClickDeleteButton = () => {
        onDelete(id)
    }

    return (
        <div className={"TodoItem"}>
            <input onChange={onChangeCheckbox} type="checkbox" checked={isDone} />
            <div className={"content"}>{content}</div>
            <div className={"date"}>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

export default memo(TodoItem);