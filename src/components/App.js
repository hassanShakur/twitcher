import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' exact element={<StreamList />} />
          <Route path='/streams/new' element={<StreamCreate />} />
          <Route path='/streams/edit' element={<StreamEdit />} />
          <Route path='/streams/show' element={<StreamShow />} />
          <Route path='/streams/delete' element={<StreamDelete />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
