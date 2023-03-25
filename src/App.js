import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed} from './Components';



function App() {
  return (
    <BrowserRouter>
        <Box sx={{background: '#000'}}>
            <Navbar  />
            <Routes>
              <Route path='/' exact element={<Feed />}/>
              <Route path='/video/:id' element={<VideoDetails />}/>
              <Route path='/channel/:id'  element={<ChannelDetails />}/>
              <Route path='/search/SearchTerm'  element={<SearchFeed />}/>
            </Routes>
        </Box>
    </BrowserRouter>
  );
}

export default App;
