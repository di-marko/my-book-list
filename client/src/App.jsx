import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import BookDetails from './pages/BookDetails';
import Home from './pages/Home';

const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/book/:id' element={<BookDetails />} />
            </Routes>
        </Router>
    )
};

export default App;