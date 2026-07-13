 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './Context/UserContext.jsx';
import IDsProvider from './Context/IDsContext.jsx';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserProvider>
            <IDsProvider>
                <App />
            </IDsProvider>

    
        </UserProvider>
    </BrowserRouter>
)
