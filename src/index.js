import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//style.css를 import하면 모든 버튼이 같은 style이 된다
//그래서 Burron컴포넌트에서 props로 하나씩 스타일을 지정해준다


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


