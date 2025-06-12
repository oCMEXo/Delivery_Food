import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './Components/redux/index'
import App from './App'
import './App.css';
import './fire_base.js'

const Root = document.getElementById('root')

if (!Root) {
    throw new Error('Root is missing')
}

createRoot(Root).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>
)