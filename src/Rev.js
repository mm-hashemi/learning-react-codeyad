import React from 'react';
import ReactDOM from 'react-dom/client';

var interval;

class ReverseTime extends React.Component{
    constructor(){
        super()
        this.state={
            t:10
        } 
    }
    componentDidMount(){
        interval =  setInterval(() => {
           this.setState({
            t : this.state.t-1
            
        })
        console.log(this.state.t);
        }, 1000);
    }


    componentDidUpdate(){
        if (this.state.t === 0) {
            clearInterval(interval);
            
        }
    }
    render() {
        return (
            <>
             <h2 className='timer'>{this.state.t}</h2>
            </>
           
        )
    }
}






export default ReverseTime;