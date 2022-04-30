import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'

import { ResultContextProvider } from './contexts/ResultContextProvider';
import './index.css'
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render( 
    <ResultContextProvider>
        <Router>
            < App / > 
        </Router>
    </ResultContextProvider>
);