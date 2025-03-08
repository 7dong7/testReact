/**
 *  ==== async ====
 *  어떤 함수를 비동기 함수로 만들어주는 키워드 이다
 *  함수가 프로미스를 반환하도록 변환해주는 그런 키워드이다
 *  
 *  프로미스를 반환하지 않는 함수를 프로미스로 반환하게 만드는 기능을 한다 (비동기 전환)
 */
async function getData() { // 비동기 함수로 선언
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            resolve({
                name: "홍길",
                id: "wintterlood",
            })
        }, 1500);
    })
}
function get2Data() {
    return {
        name: "홍길",
        id: "wintterlood",
    };
}
console.log(getData());
console.log(get2Data());

/**
 *  ===== await =====
 *  async 함수 내부에서만 사용이 가능한 키워드이다
 *  비동기 함수가 다 처리되기를 기다리는 역할을 한다 (기다린다)
 */
async function printData() {
    // getData()
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch();

    // await 를 붙여서 사용하게 되면 위 처럼 then 을 붙여서 성공 이후에 발생되는 구현을 하지 않아도 된다
    const data = await getData(); // 이렇게 작성하면 이 다음 코드는 getData() 실행된다음에 호출되기 때문에 then 과 비슷한 작동을 하게된다
    console.log(data);
}

printData();