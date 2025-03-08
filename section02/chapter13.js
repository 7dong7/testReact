// 프로미스 객체 선언 // 객체 선언과 동시에 비동기 작업을 실행한다
// ========== 1. 프로미스 ==========
// const promise = new Promise( (resolve, reject) => {
//                                         // 프로미스의 파라미터로 resolve, reject 를 넣을 수 있다
//     // 비동기 작업 작성
//         // executor 라고 부른다
//     setTimeout(() => {
//         console.log("안녕");
//         // resolve("안녕"); // 비동기 함수를 성공 상태로 바꾸는 기능
//         // resolve 안에 값을 넣으면 promise 안에 PromiseResult 안에 "안녕" 이라는 결과값을 넣을 수 있다
//
//         reject("왜 실패했심?"); // 프로미스의 상태를 실패 상태로 바꾸는 기능
//         // 실패 결과값을 넣을 수 있다 : 실패 이유에 대해서 작성할 수도 있음
//
//     }, 2000);
// });

// console.log(promise);

/**
 *  resolve() 비동기 함수를 성공 상태로 바꾼 다음에 호출한다
 *  그러면 resolve() 로 인해서 promise 객체의 상태가 fulfilled 상태로 바뀐다
 */
// setTimeout(() => {
//     console.log(promise);
// }, 3000);


// ========== 2. 프로미스 응용 ==========
// const promise = new Promise( (resolve, reject) => {
//     const num = null; // 값을 null 로 변경하는 경우 resolve 가 호출되지 않아서 아래의 then 메소드는 호출되지 않는다
//         // then 메소드는 비동기 작업이 성고했을 때만 호출 된다
//         // 이러한 경우 then 메소드가 아니라 catch 메소드를 사용해서 실패 이후의 처리를 해주면 된다
//
//     setTimeout(() => {
//         if (typeof num === 'number') {
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다");
//         }
//     }, 2000);
// });

// then 메소드 사용 (프로미스의 결과값 이용) // then 그 후에 라는 뜻
// promise
//     .then((value) => { // resolve 를 호출한 다음에 호출되는 메소드 이다
//         console.log(value);
//         // then 의 경우 프로미스를의 결과로 성공한 프로미스를 반환한다. 프로미스를 그대로 다시 반환한다 따라서 catch 메소드를 이어서 작성하는게 가능하다
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// setTimeout(() => {
//     console.log(promise);
// }, 3000);

// // catch 메소드 사용
// promise.catch((error) => {
//     console.log(error);
// });


// ========== 3. 프로미스 응용 2번째: promise 의 안에 함수를 이용해서 호출하여 비동기 처리 ==========
function add10(num) {

    const promise = new Promise( (resolve, reject) => {

        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });

    return promise;
}

/**
 *  이렇게 파리미터로 0을 넘겨주면
 *  add10 메소드를 실행한다 -> promise 객체를 생성과 동시에 실행한다
 *  그 비동기 실행객체 프로미스를 반환한다
 */
const p = add10(0);
p
    .then((result) => {
        console.log(result); // 초기값 0 첫번째 add10 을 만나서 + 10 된 값을 출력
        return add10(result);

        // const newP = add10(result); // 한번더 + 10 = 20 출력
        // newP.then((result) => {
        //     console.log(result);
        // });
        // return newP; // 이렇게 반환하면 프로미스 객체를 반환하게 되고
    })
    .then((result) => { // 여기서 then 을 이어서 작성할 수 있게 된다
        console.log(result);
    });

// 생략과 축약을 하게 되면
add10(0)
    .then((result) => {
        return add10(result);
    })
    .then((result) => {
        return add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });