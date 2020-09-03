# muhi-ui Components UI 📋

[![Muhi-UI](https://img.shields.io/badge/Muhi--UI-1.0.0-critical)](https://github.com/muhimron90/muhi-ui)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## What is this  ❓

Simple Component ui for reactjs or CRA

> _Note_ : still under personal experimental version..
>
> > Support React @16.x

## Installation Guide 💎

### install ↩️

`npm install @muhimron90/muhi-ui`

### uninstall ↩️

`npm uninstall @muhimron90/muhi-ui`

## How to Use ❓
#### Example 🔐

```jsx
import React from 'react'
import {Button} from '@muhimron90/muhi-ui'

class App () extends React.Component {
    constructor(props){
        super(props);
        this.state : {}
    }
    render(){
        return
        (
            <div>
                <Button text="I'm a Button" />
            </div>
        )
    }
}

```
#### Options | Props :
- *text_type* - _String_
- *text* - _default_ | "some Text"
