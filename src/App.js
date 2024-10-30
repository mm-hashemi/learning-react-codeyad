import React from 'react';
import ReactDOM from 'react-dom/client';
// import Timer from './timer';


import ReverseTime from './Rev';

class App extends React.Component {
    render() {
      return (
       <div className='main'>
       <ReverseTime/>
       </div>
      );
    }
  }

  export default App;