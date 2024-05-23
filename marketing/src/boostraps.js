import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
// 这里使用react了，就可以直接在js文件里写html了

const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    )
};


// context 1: in development mode and in isolation
// 也就是marketing app独自运行
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// context 2: host app 运行（可能是dev，也可能是prod）
export { mount };
