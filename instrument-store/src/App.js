import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { InventoryProvider } from './context/InventoryContext';
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import FAQPage from './pages/FAQPage/FAQPage';



function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState("");
  const [products] = useState(
    [
      { id: 1, category: "Guitar", name: "Fender 70th Anniversary Player Stratocaster Electric Guitar Nebula Noir", cost: "$999.99", image: "https://media.guitarcenter.com/is/image/MMGS7/M07989000001000-00-600x600.jpg", inventory: 10, inCart: 0 },
      { id: 2, category: "Piano", name: "Yamaha P-125ABLB Digital Piano With Wooden Stand and Bench", cost: "$949.99", image: "https://media.guitarcenter.com/is/image/MMGS7/M00913000000000-00-600x600.jpg", inventory: 3, inCart: 0 },
      { id: 3, category: "Drum", name: "DW Collector's Series 4-Piece Shell Pack Twisted Walnut Chrome Hardware", cost: "$4,035.00", image: "https://media.guitarcenter.com/is/image/MMGS7/H80431000002001-00-600x600.jpg", inventory: 5, inCart: 0 },
      { id: 4, category: "Violin", name: "Yamaha YEV104 Series Electric Violin", cost: "$745.99", image: "https://media.guitarcenter.com/is/image/MMGS7/J33592000000000-00-600x600.jpg", inventory: 7, inCart: 0 },
      { id: 5, category: "Chello", name: "Yamaha SVC-210SK Silent Cello Brown", cost: "$3,239.99", image: "https://media.guitarcenter.com/is/image/MMGS7/463028000008000-00-600x600.jpg", inventory: 8, inCart: 0 },
      { id: 6, category: "Saxophone", name: "Yamaha YAS-26 Standard Alto Saxophone Silver", cost: "$2,736.00", image: "https://media.guitarcenter.com/is/image/MMGS7/H95233000002000-00-600x600.jpg", inventory: 2, inCart: 0 },
      { id: 7, category: "Trumpet", name: "Yamaha YTR-2330 Standard Bb Trumpet Bb Trumpet Silver", cost: "$1,777.00", image: "https://media.guitarcenter.com/is/image/MMGS7/H82869000001001-00-600x600.jpg", inventory: 1, inCart: 0 },
      { id: 8, category: "Guitar", name: "Taylor 814ce Builder's Edition 50th Anniversary Limited-Edition Grand Auditorium Acoustic-Electric Guitar Kona Edgeburst", cost: "$4,999.00", image: "https://media.guitarcenter.com/is/image/MMGS7/M08663000001000-00-600x600.jpg", inventory: 9, inCart: 0 },
      { id: 9, category: "Piano", name: "Casio GP-510BP Celviano Grand Hybrid Black", cost: "$6,299.00", image: "https://media.guitarcenter.com/is/image/MMGS7/L75140000001000-00-600x600.jpg", inventory: 5, inCart: 0 },
      { id: 10, category: "Guitar", name: "Gibson Les Paul Modern Figured Electric Guitar Cobalt Burst" , cost: "$2,999.00", image: "https://media.guitarcenter.com/is/image/MMGS7/M04073000001000-00-600x600.jpg", inventory: 5, inCart: 0 }
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
    setFavorites([...favorites, product]);
    setMessage(`Added ${product.name} to your favorites.`);
    console.log(message, favorites);
  }

  const addToCart = (product, quantity) => {
    setCart([...cart, product]);
    setMessage(`Added ${product.name} to your shopping cart.`);
    console.log(message, cart);
  };

  const removeFromCart = (cart, quantity) => {
    setCart(cart.filter());
  }

  const addQuantity = (product, quantity) => {
    quantity < product.inventory ? setQuantity(quantity+1) : prompt(`Sorry, we only have ${product.inventory} left in stock.`);
  }

  const minusQuantity = (quantity) => {
    quantity > 0 && setQuantity(quantity-1);
  }

  let guitar = products.filter(product => product.type === "Guitar");

  return (
    <Router>
      <ShoppingCartProvider>
        {/* <InventoryProvider> */}
          <Routes>
            <Route path="/" element={<HomePage props={{ images, firstImage, secondImage, thirdImage, nextImage, previousImage }} />} exact />
            {/* <Route path="/products" element={<ProductsPage cart={cart} products={products} addToCart={addToCart} quantity={quantity} addToFavorites={addToFavorites} addQuantity={addQuantity} minusQuantity={minusQuantity} />} exact/> */}
            <Route path="/products/*" element={<ProductsPage props={{cart, products, addToCart, quantity, addToFavorites, addQuantity, minusQuantity }} />} exact/>
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