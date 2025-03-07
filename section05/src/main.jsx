import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './App.jsx'

/**
 *  이런식으로 만들 수 있다
 */
// const Hello = () => {
//     return <div>hello</div>
// }

/**
 *  대부분 관례상 App 컴포넌트를 Root 컴포넌트로 상용한다
 */
createRoot(document.getElementById('root')).render(
    /*<Hello />*/
    <App/>
);
