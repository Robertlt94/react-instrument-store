import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { InventoryProvider } from './context/InventoryContext';
import Header from './components/Header/Header';


function App() {
  const [headerStart, setHeaderStart] = useState(0);
  const [headerMiddle, setHeaderMiddle] = useState(1);
  const [headerEnd, setHeaderEnd] = useState(2);
  const [headerImages, setHeaderImages] = useState (
    [
      {
          description: "An individual playing the violin",
          url: "https://news.inverhills.edu/wp-content/uploads/2012/11/concert-music-musical-instrument-violin-1170x680.jpg"
      },
      {
          description: "An individual playing the guitar",
          url: "https://lahabramusic.com/wp-content/uploads/2016/08/playing-guitar.jpeg"
      },
      {
          description: "An individual playing the chello",
          url: "https://ciomit.com/wp-content/uploads/2024/01/pexels-roxanne-minnish-7976313-1200x800.jpg"
      },
      {
          description: "An individual playing the drums",
          url: "https://articles.roland.com/wp-content/uploads/2022/02/USED_TD-07KVX-12-scaled.jpg"
      },
      {
          description: "An individual playing the piano",
          url: "https://www.bandm.co.uk/media/contentmanager/content/news/ADVANTAGES-OF-DIGITAL-PIANO-HOME_1.jpg"
      },
      {
          description: "An individual playing the Saxophone",
          url: "https://insidemusicschools.com/wp-content/uploads/2020/06/Untitled-Facebook-Cover-2400-%C3%97-1600-px-2.png"
      }
    ]
  );

  let imageCount = headerImages.length - 1;

  const nextHeaderImage = () => {
    headerStart < imageCount ? setHeaderStart(headerStart+1) : setHeaderStart(0);
    headerMiddle < imageCount ? setHeaderMiddle(headerMiddle+1) : setHeaderMiddle(0);
    headerEnd < imageCount ? setHeaderEnd(headerEnd+1) : setHeaderEnd(0);
  };

  const previousHeaderImage = () => {
    headerStart > 0 ? setHeaderStart(headerStart-1) : setHeaderStart(imageCount);
    headerMiddle > 0 ? setHeaderMiddle(headerMiddle-1) : setHeaderMiddle(imageCount);
    headerEnd > 0 ? setHeaderEnd(headerEnd-1) : setHeaderEnd(imageCount);
  }

  return (
    <Router>
      <ShoppingCartProvider>
        {/* <InventoryProvider> */}
          <div>
            <Header props={{headerImages, headerStart, headerMiddle, headerEnd, nextHeaderImage, previousHeaderImage}}/>
            <nav>
              <Link to='/'>All</Link>
              <Link to='/guitar'>Guitar</Link>
              <Link to='/piano'>Piano</Link>
              <Link to='/drum'>Drum</Link>
              <Link to='/flute'>Flute</Link>
              <Link to='/harp'>Harp</Link>
              <Link to='/saxophone'>Saxophone</Link>
              <Link to='/trumpet'>Trumpet</Link>
              <Link to='/violin'>Violin</Link>
            </nav>
          </div>
        
        {/* </InventoryProvider> */}
      </ShoppingCartProvider>
    </Router>
  )
};

export default App;
