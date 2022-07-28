import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import logo from './logo.svg';
import layout from'./Pages/layout';

import './App.css';
import Layout from './Pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Layout />}>
          <Route path="Contacts" elenent={<Contacts />}/>
          <Route path="About" elenent={<About />}/>
          <Route path="layout" elenent={<layout />}/>

        </Route>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
