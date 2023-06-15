import './App.css';
import { Routes, Route } from "react-router-dom";
import NewsItem from './components/NewsItem';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
       <Navbar ></Navbar>
        <Routes>
          <Route path='/' element={<NewsItem  q="all" heading="everything"/>} />
          <Route path='/health' element={<NewsItem  q="health" heading="everything"/>} />
          <Route path='/sports' element={<NewsItem  q="sports" heading="everything"/>} />
          <Route path='/crime' element={<NewsItem  q="crime" heading="everything"/>} />
          <Route path='/politics' element={<NewsItem  q="politics" heading="everything"/>} />
          <Route path='/buisness' element={<NewsItem q="buisness" heading="everything"/>}/>
          <Route path='/bitcoin' element={<NewsItem q="bitcoin" heading="everything"/>}/>
          <Route path='/war' element={<NewsItem q="war" heading="everything"/>}/>
          <Route path='/tesla' element={<NewsItem q="tesla" heading="everything"/>}/>
          <Route path='/apple' element={<NewsItem q="apple" heading="everything"/>}/>
          <Route path='/bollywood' element={<NewsItem q="bollywood" heading="everything"/>}/>
          <Route path='/hollywood' element={<NewsItem q="hollywood" heading="everything"/>}/>
          <Route path='/india' element={<NewsItem q="india" heading="everything"/>}/>
          <Route path='/london' element={<NewsItem q="london" heading="everything"/>}/>
          <Route path='/us' element={<NewsItem q="america" heading="everything"/>}/>
          <Route path='/pakistan' element={<NewsItem q="pakistan" heading="everything"/>}/>
          <Route path='/russia' element={<NewsItem q="russia" heading="everything"/>}/>
          <Route path='/hollywood' element={<NewsItem q="hollywood" heading="everything"/>}/>
          <Route path='/singapore' element={<NewsItem q="singapore" heading="everything"/>}/>
          <Route path='/canada' element={<NewsItem q="canada" heading="everything"/>}/>
          <Route path='/ukraine' element={<NewsItem q="ukraine" heading="everything"/>}/>

          <Route path='/topheadlines' element={<NewsItem q="all" heading="top-headlines"/>}/>
          
      </Routes>
    </>
  );
}

export default App;
