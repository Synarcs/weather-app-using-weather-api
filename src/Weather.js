import React, { Component } from 'react';

class Weather extends Component{
    render(){
        return(
           <div className="weather-condition">
            {this.props.name&&<p>Name of the city:{this.props.name}</p>}
            {this.props.country && <p>Country:{this.props.country}</p>}
            {this.props.city && <p>City_Name:{this.props.city}</p>}
            {this.props.humidity && <p>Humidity:{this.props.humidity}%</p>}
            {this.props.temperature && <p>temperature:{this.props.temperature}:deg-celcius</p>}
            {this.props.wind_speed && <p>wind_speed:{this.props.wind_speed}:miles/hr</p>}
            {this.props.co_ordinates && <p>co:ordinates-X:{this.props.co_ordinates[0]}</p>}
            {this.props.co_ordinates && <p>co:ordinates-Y:{this.props.co_ordinates[1]}</p>}
            {this.props.err && <p>err:{this.props.err}</p>}
           </div>
        );
    }
}

export default Weather;