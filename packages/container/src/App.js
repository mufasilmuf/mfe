import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import MarketingApp from './components/marketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <React.Fragment>
                    <Header />
                    <MarketingApp />
                </React.Fragment>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App;
