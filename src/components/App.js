import { BrowserRouter, Route, Routes } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' component={StreamCreate} />
          <Route path='/streams/edit' component={StreamEdit} />
          <Route path='/streams/show' component={StreamShow} />
          <Route path='/streams/delete' component={StreamDelete} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
