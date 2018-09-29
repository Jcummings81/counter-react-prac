import React from 'react'
import Clock from './Clock'

 

class Counter extends React.Component {
    state = { value: 0 }

    inc = () => {
        this.setState({value: this.state.value + 1 })
    }

    dec = () => {
        this.setState({value: this.state.value - 1 })
    }
    calcColor = () => {
        const lightColors = ['white', 'yellow']
        return lightColors.includes(this.props.name) ? 'black' : 'white'
    }

    render () {
        //Same as const name = this.props.name (destructuring)
        const { name } = this.props
        //Same as const value = this.state
        const { value } = this.state

        return(
            <div
                style={
                    {
                    backgroundColor: name,
                    color: this.calcColor()
                }
            }>
                <h1>{name} counter</h1>
                <Clock />
                <h1>{value}</h1>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }

}

export default Counter