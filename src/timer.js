
import React from 'react';
// import ReactDOM from 'react-dom/client';

var boolee=true;
var d="date";
class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        time : new Date().toLocaleTimeString()
      }
    }
    changeTime=()=>{
      if(boolee){
        this.setState({time : new Date().toLocaleDateString()});
        boolee=false;
        d="Time";
      }else{
        this.setState({time : new Date().toLocaleTimeString()});
        boolee=true;
         d="date";

      }

    }
    render() {
      setInterval(() => {
        if (boolee) {
          this.setState({time : new Date().toLocaleTimeString()});
        }
        
       
      }, 1000);
      return (
        <div className='main'>
         <h2 className='timer'>{this.state.time}</h2>
         <button type='button' onClick={this.changeTime} className='btnc'>show {d}</button>
        </div>

      );
    }
  }

  export default Timer;