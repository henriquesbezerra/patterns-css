import React from 'react';
import './BEM/bem.scss';

function App() {
  return (
    <>
      <h1>Paranauê</h1>
      <div className="box">
        <p className="box__paragraph"> 
          Lorem Ipsum
        </p>
        <p className="box__paragraph-"> 
          Lorem Ipsum
        </p>
      </div>

      <div className="box--italic">
        <p className="box__paragraph"> 
          Lorem Ipsum
        </p>
        <p className="box__paragraph-"> 
          Lorem Ipsum
        </p>
      </div>
    </>
  );
}

export default App;
