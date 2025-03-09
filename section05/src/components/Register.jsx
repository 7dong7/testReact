// import {useState} from "react";
// import {useRef} from "react";
import {useState, useRef} from "react";


// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개


// ======= useRef 사용 ========
const Register = () => {
    /* === 변수 === */ // 통합 변수
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    // ===== reference 객체 생성 ======
    // const refObj = useRef(0);
    // console.log(refObj);
    // console.log(refObj.current); // 값에 접근
    // console.log("다시 래더링 되었습니다.")
    /**
     *  아래의 refObj의 값을 +1 시켜주는 버튼을 클릭하게 되면
     *  refObj 의 갑은 1씩 증가된다
     *  그렇지만 위의 console.log() 의 값은 표시되지 않는다 => 리랜더링 되지 않기 때문
     */

    const countRef = useRef(0);
    const inputRef = useRef();
    // console.log("다시 래더링 되었습니다.")
    /**
     *  그럼 왜 let count = 0; 과 같이 선언해서 사용하지 않고 useRef()를 사용하는가?
     *  
     *  let count 와 같이 값을 선언해서 onChange() 같은 함수의 안에서 값을 count++; 와 같이 사용하게 된다면,
     *  함수 작동시 리랜더링을 하게되면 let count; 또한 같이 실해되어 값이 초기화 되어버리고 만다
     *  
     *  만약 let count 를 Register 컴포너트의 밖으로 빼서 사용하게 된다면 문제를 랜더링 문제를 해결할 수 있다
     *  but, 외부에서 Register 컴포넌트를 여러개 호출하게 된다면 여러개의 Register 컴포넌트가 같은 값을 공유하기 때문에
     *      의도와는 다른 동작을 할 수 있다
     */
    

    const onChange = (e) => {
        // useRef 의 값 변경 및 출력
        countRef.current++;
        console.log(countRef); // 수정된 횟수를 출력하는
        
        // [e.target.name] 의 표현은 e.target.name 의 값을 동적으로 객체 키로 사용하겠다는 뜻이다
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log([e.target.name], e.target.value);
        // country kr
        // bio ㄴ
    }

    // 제출 이벤트 핸들링
    const onSubmit = () => {
        if (input.name === "") {
            // 이름을 입력하는 DOM 요소에 포커스를 주기
            // console.log(inputRef.current); // <input name = "name" value placeholder = "이름" /> 출력
            inputRef.current.focus();
        }
    };

    // === 리턴 랜더링 === //
    return (
        <div>
            {/*<button onClick={ () => {*/}
            {/*    refObj.current++;*/}
            {/*    console.log(refObj);*/}
            {/*}}>*/}
            {/*    ref + 1 = {input.bio}*/}
            {/*</button>*/}

            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름"} />
            </div>
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date" />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value={"kr"}>한국</option>
                    <option value={"us"}>미국</option>
                    <option value={"uk"}>영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}/>
            </div>
            
            <button onClick={onSubmit}>제출</button>
        </div>
    );
}




    /* ==== 이벤트 핸들러 ====*/ // 통합 이벤트 핸들러
//     const onChange = (e) => {
//         // [e.target.name] 의 표현은 e.target.name 의 값을 동적으로 객체 키로 사용하겠다는 뜻이다
//         setInput({
//             ...input,
//             [e.target.name] : e.target.value
//         })
//         console.log([e.target.name], e.target.value);
//         // country kr
//         // bio ㄴ
//     }
//
//     // === 리턴 랜더링 === //
//     return (
//         <div>
//             <div>
//                 <input name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
//             </div>
//             <div>
//                 <input name="birth" value={input.birth} onChange={onChange} type="date" />
//             </div>
//             <div>
//                 <select name="country" value={input.country} onChange={onChange}>
//                     <option value=""></option>
//                     <option value={"kr"}>한국</option>
//                     <option value={"us"}>미국</option>
//                     <option value={"uk"}>영국</option>
//                 </select>
//             </div>
//             <div>
//                 <textarea name="bio" value={input.bio} onChange={onChange}/>
//             </div>
//         </div>
//     );
// }

// ===== 변경후 1 ==== //
// const Register = () => {
//     /* === 변수 === */ // 통합 변수
//     const [input, setInput] = useState({
//         name: "",
//         birth: "",
//         country: "",
//         bio: ""
//     });
//
//     /* ==== 이벤트 핸들러 ====*/ // 통합 이벤트 핸들러
//     const onChange = (e) => {
//         setInput({
//             ...input,
//             [e.target.name] : e.target.value
//         })
//     }
//
//
//     // /* === 이벤트 핸들링 === */ // 개선 변경
//     // const onChangeName = (e) => { // 이름 변경 이벤트 핸들링
//     //     setInput({
//     //         ...input,
//     //         name : e.target.value
//     //     })
//     // }
//     // const onChangeBirth = (e) => { // 생일 변경 이벤트 핸들링
//     //     setInput({
//     //         ...input,
//     //         birth : e.target.value
//     //     })
//     // }
//     // const onChangeCountry = (e) => { // 국적 변경 이벤트 핸들링
//     //     setInput({
//     //         ...input,
//     //         country : e.target.value
//     //     })
//     // }
//     // const onChangeBio = (e) => { // 자기소개 변경 이벤트 핸들링
//     //     setInput({
//     //         ...input,
//     //         bio : e.target.value
//     //     })
//     // }
//
//
//     // === 리턴 랜더링 === //
//     return (
//         <div>
//             <div>
//                 <input value={input.name} onChange={onChangeName} placeholder={"이름"} />
//             </div>
//             <div>
//                 <input value={input.birth} onChange={onChangeBirth} type="date" />
//             </div>
//             <div>
//                 <select value={input.country} onChange={onChangeCountry}>
//                     <option value=""></option>
//                     <option value={"kr"}>한국</option>
//                     <option value={"us"}>미국</option>
//                     <option value={"uk"}>영국</option>
//                 </select>
//             </div>
//             <div>
//                 <textarea value={input.bio} onChange={onChangeBio}/>
//             </div>
//         </div>
//     );
// }


// ======== 변경 전 =========
// const Register = () => {
//     /* === 변수 === */
//     const [name, setName] = useState("이름"); // 이름
//     const [birth, setBirth] = useState(""); // 생일
//     const [country, setCountry] = useState("") // 국적
//     const [bio, setBio]= useState("");
//
//     /* === 이벤트 핸들링 === */
//     const onChangeName = (e) => { // 이름 변경 이벤트 핸들링
//         setName(e.target.value);
//     }
//     const onChangeBirth = (e) => { // 생일 변경 이벤트 핸들링
//         setBirth(e.target.value);
//     }
//     const onChangeCountry = (e) => { // 국적 변경 이벤트 핸들링
//         setCountry(e.target.value);
//     }
//     const onChangeBio = (e) => { // 자기소개 변경 이벤트 핸들링
//         setBio(e.target.value);
//     }
//
//
//     // === 리턴 랜더링 === //
//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} placeholder={"이름"} />
//             </div>
//             <div>
//                 <input value={birth} onChange={onChangeBirth} type="date" />
//             </div>
//             <div>
//                 <select value={country} onChange={onChangeCountry}>
//                     <option value=""></option>
//                     <option value={"kr"}>한국</option>
//                     <option value={"us"}>미국</option>
//                     <option value={"uk"}>영국</option>
//                 </select>
//                 {country}
//             </div>
//             <div>
//                 <textarea value={bio} onChange={onChangeBio}/>
//                 {bio}
//             </div>
//         </div>
//     );
// }

export default Register;