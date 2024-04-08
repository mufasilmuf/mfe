import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MarketingApp from './components/marketingApp';
import Header from './components/Header';

const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <MarketingApp />
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;
