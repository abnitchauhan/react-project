import React from 'react';

class Toggle extends React.Component
{
 constructor(props)
 {
     super(props)
       this.state = {isToggleOn: true};
    // Binding necessary to make work in Callback
     this.handleClick = this.handleClick.bind(this);
}

handleClick()
{
    this.setState(state=>({
        isToggleOn: !state.isToggleOn
    }));
}

render()
{
    return(
        <button onClick ={this.handleClick}>
            {this.state.isToggleOn?'On': 'OFF'}
        </button>
    );
}
 
}

export default Toggle;