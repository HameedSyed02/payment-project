
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Addtransaction from './component/Addtransaction';
import Listtransaction from './component/Listtransaction';
import Navigationbar from './component/Navigationbar';
import {Routes,Link, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigationbar/>
      <Routes>
        <Route path="#" element={<App/>}/>
        <Route path="/transaction" element={<Addtransaction/>}/>
        <Route path="/listtransaction" element={<Listtransaction/>}/>
      </Routes>

      </BrowserRouter>
      <h1>hello</h1>
    </div>
  );
}

export default App;
