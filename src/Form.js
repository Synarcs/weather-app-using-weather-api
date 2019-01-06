import React, { Component } from 'react';

class Form extends Component{
    render(){
        return(
            <div>
                <h1>the weather finding app</h1>
                <form onSubmit={this.props.getweather}>
                    <input type="text" name="city" placeholder="city"/>
                    <input type="text" name="country" placeholder="country"/>
                    <button type="submit">check weather</button>
                </form>
            </div>
        );
    }
}

export default Form;
