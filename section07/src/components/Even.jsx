import {useEffect} from "react";

const Even = () => {

    useEffect(() => {
        // 3. 언마운트: 죽음
        // useEffect 로 함수를 반환하는 경우 - 클린업, 정리함수 라고 부른다
        return () => {
            console.log("unmount");
        };
    }, []);

    return (
        <div>짝수입니다</div>
    );
}

export default Even;