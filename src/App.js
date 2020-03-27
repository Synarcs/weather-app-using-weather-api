import React, { Component } from 'react';
import Form from './Form';
import Weather from './Weather';
import str from './str';

const api_key = "";
const api_key_time = ""
class App extends Component {
  state={
    name : undefined,
    country : undefined,
    city:undefined,
    humidity:undefined,
    temperature:undefined,
    wind_speed:undefined,
    co_ordinates:undefined,
    err:undefined
  }
  getweather = async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+api_key+'&units=metric')
    const api_json = await api_call.json();
    //if cit and country exist 
    // if (city===true && country===true){
    if(city&&country) {
    this.setState({
        name:city,
        country:api_json.sys.country,
        city:city,
        humidity:api_json.main.humidity,
        temperature:api_json.main.temp,
        wind_speed:api_json.wind.speed,
        co_ordinates:[api_json.coord.lat,api_json.coord.lon],
        err:''
      });
    }
    else{
      this.setState({
        name:undefined,country:undefined, city:undefined, humidity:undefined, temperature:undefined, err:'not city and country not found please try again'
      });
    }
    console.log(api_json);
  }
  clear= (e) =>{
    console.log(e.target.state);
    this.setState({
        name:undefined,country:undefined,city:undefined, humidity:undefined,temperature:undefined,wind_speed:undefined,co_ordinates:undefined,err:''
    });
  }
  render(){
    return (
      <div>
      <h1>the weather app</h1>
       <h2>the weather app with temperature</h2>
        <str getweather={this.getweather}/>
        <Form getweather={this.getweather}/>
        <button type="submit" onClick={this.clear}>clear input</button>
       <Weather name={this.state.name}
        country ={this.state.country}
        city = {this.state.city}
        humidity = {this.state.humidity}
        temperature = {this.state.temperature}
        wind_speed = {this.state.wind_speed}
        co_ordinates = {this.state.co_ordinates}
        err = {this.state.err}/>
      </div>
    );
  }
}

export default App;






