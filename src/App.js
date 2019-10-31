/*
App Component
1) always renders a `QuoteForm` component
2) always renders a `Quotes` components

redner / import them in :) 
*/

import React, { Component } from 'react';
import QuoteForm from '/Users/dawn/quote-maker-react-lab-online-web-ft-061019/src/components/QuoteForm.js';
import Quotes from '/Users/dawn/quote-maker-react-lab-online-web-ft-061019/src/containers/Quotes.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
         <QuoteForm />
         <Quotes  /> 
         </div>
    );
  }
}

export default App;
