import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link
         to='./classList/Math'><button className='btn'>Math 1010</button>
         </Link>
         <Link to='./classList/ENG2010'>
        <button className='btn'>English 2010</button>
        </Link>
        <Link>
        <button className='btn'>Biology 2020</button>
        </Link>
      </div>
    );
  }
}
