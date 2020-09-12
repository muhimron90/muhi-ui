import React from 'react'
import logo from './assets/logo.png'
import { Button } from './components/Button'
/* eslint import/no-unresolved: 2 */
import './styles.css'

function App() {
    const press = () => {
        const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
        console.log(z)
    }
    return (
        <div className="app">
            <div className="app__body">
                <h2>Welcome</h2>
                <div className="padding">
                    <img className="img__style" src={logo} alt="test" />
                    <p>Edit src/App.js</p>
                </div>
                <div>
                    <Button size="small" onPress={press} />
                </div>
            </div>
        </div>
    )
}

export default App
