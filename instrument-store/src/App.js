import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { InventoryProvider } from './context/InventoryContext';
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import FAQPage from './pages/FAQPage/FAQPage';
import transitions from '@material-ui/core/styles/transitions';



function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const [products] = useState(
    [
      { id: 1, category: "guitar", name: "Fender 70th Anniversary Player Stratocaster Electric Guitar Nebula Noir", cost: "$999.99", image: "https://media.guitarcenter.com/is/image/MMGS7/M07989000001000-00-600x600.jpg", favorite: false },
      { id: 2, category: "piano", name: "Yamaha P-125ABLB Digital Piano With Wooden Stand and Bench", cost: "$949.99", image: "https://media.guitarcenter.com/is/image/MMGS7/M00913000000000-00-600x600.jpg", favorite: false },
      { id: 3, category: "drum", name: "DW Collector's Series 4-Piece Shell Pack Twisted Walnut Chrome Hardware", cost: "$4,035.00", image: "https://media.guitarcenter.com/is/image/MMGS7/H80431000002001-00-600x600.jpg", favorite: false },
      { id: 4, category: "violin", name: "Yamaha YEV104 Series Electric Violin", cost: "$745.99", image: "https://media.guitarcenter.com/is/image/MMGS7/J33592000000000-00-600x600.jpg", favorite: false },
      { id: 5, category: "chello", name: "Yamaha SVC-210SK Silent Cello Brown", cost: "$3,239.99", image: "https://media.guitarcenter.com/is/image/MMGS7/463028000008000-00-600x600.jpg", favorite: false },
      { id: 6, category: "saxophone", name: "Yamaha YAS-26 Standard Alto Saxophone Silver", cost: "$2,736.00", image: "https://media.guitarcenter.com/is/image/MMGS7/H95233000002000-00-600x600.jpg", favorite: false },
      { id: 7, category: "trumpet", name: "Yamaha YTR-2330 Standard Bb Trumpet Bb Trumpet Silver", cost: "$1,777.00", image: "https://media.guitarcenter.com/is/image/MMGS7/H82869000001001-00-600x600.jpg", favorite: false },
      { id: 8, category: "guitar", name: "Taylor 814ce Builder's Edition 50th Anniversary Limited-Edition", cost: "$4,999.00", image: "https://media.guitarcenter.com/is/image/MMGS7/M08663000001000-00-600x600.jpg", favorite: false },
      { id: 9, category: "piano", name: "Casio GP-510BP Celviano Grand Hybrid Black", cost: "$6,299.00", image: "https://media.guitarcenter.com/is/image/MMGS7/L75140000001000-00-600x600.jpg", favorite: false },
      { id: 10, category: "guitar", name: "Gibson Les Paul Modern Figured Electric Guitar Cobalt Burst" , cost: "$2,999.00", image: "https://media.guitarcenter.com/is/image/MMGS7/M04073000001000-00-600x600.jpg", favorite: false }
    ]
  );
  const [firstImage, setFirstImage] = useState(0);
  const [secondImage, setSecondImage] = useState(1);
  const [thirdImage, setThirdImage] = useState(2);
  const [images] = useState(
    [
      { description: "An individual playing the violin", url: "https://news.inverhills.edu/wp-content/uploads/2012/11/concert-music-musical-instrument-violin-1170x680.jpg" },
      { description: "An individual playing the guitar", url: "https://lahabramusic.com/wp-content/uploads/2016/08/playing-guitar.jpeg" },
      { description: "An individual playing the chello", url: "https://ciomit.com/wp-content/uploads/2024/01/pexels-roxanne-minnish-7976313-1200x800.jpg" },
      { description: "An individual playing the drums", url: "https://articles.roland.com/wp-content/uploads/2022/02/USED_TD-07KVX-12-scaled.jpg" },
      { description: "An individual playing the piano", url: "https://www.bandm.co.uk/media/contentmanager/content/news/ADVANTAGES-OF-DIGITAL-PIANO-HOME_1.jpg" },
      { description: "An individual playing the Saxophone", url: "https://insidemusicschools.com/wp-content/uploads/2020/06/Untitled-Facebook-Cover-2400-%C3%97-1600-px-2.png" }
    ]
  );

  let imageCount = images.length - 1;

  const nextImage = () => {
    firstImage < imageCount ? setFirstImage(firstImage+1) : setFirstImage(0);
    secondImage < imageCount ? setSecondImage(secondImage+1) : setSecondImage(0);
    thirdImage < imageCount ? setThirdImage(thirdImage+1) : setThirdImage(0);
  };

  const previousImage = () => {
    firstImage > 0 ? setFirstImage(firstImage-1) : setFirstImage(imageCount);
    secondImage > 0 ? setSecondImage(secondImage-1) : setSecondImage(imageCount);
    thirdImage > 0 ? setThirdImage(thirdImage-1) : setThirdImage(imageCount);
  }

  const addToFavorites = (product) => {
    // setFavorites([...favorites, product]);
    product.favorite = !product.favorite;
    setMessage(`Added ${product.name} to your favorites.`);
    // console.log(message);
  }

  const removeFromFavorites = (product) => {
    product.favorite = !product.favorite;
    setMessage(`Removed ${product.name} from your favorites.`);
    // console.log(message);
  }

  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`added ${product.name} to cart.`);
    // console.log(cart);
  };

  const removeFromCart = (i) => {
    let newArray = cart.filter((item, index) => index !== i);
    setCart([...newArray]);
    setMessage(`Item was removed.`);
  }

  return (
    <Router>
      <ShoppingCartProvider>
        {/* <InventoryProvider> */}
          <Routes>
            <Route path="/" element={<HomePage props={{ images, firstImage, secondImage, thirdImage, nextImage, previousImage }} />} exact />
            {/* <Route path="/products" element={<ProductsPage cart={cart} products={products} addToCart={addToCart} quantity={quantity} addToFavorites={addToFavorites} addQuantity={addQuantity} minusQuantity={minusQuantity} />} exact/> */}
            <Route path="/products/*" element={<ProductsPage cart={cart} products={products} message={message} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} addToCart={addToCart} removeFromCart={removeFromCart} />} exact/>
            <Route path="/about" element={<AboutPage />} exact />
            <Route path="/contact-us" element={<ContactUsPage />} exact />
            <Route path="/faq" element={<FAQPage />} exact />
          </Routes>
        {/* </InventoryProvider> */}
      </ShoppingCartProvider>
    </Router>
  )
};

export default App;