
import {Header} from './component/Header';
import {Gallery}  from './component/Gallery';
import {Footer} from './component/Footer';
import {ThemeProvider}  from './component/ThemeContext.jsx';
import img1 from './assets/1-jplenio.jpg';
import img2 from './assets/2-jeremy-bishop.jpg';
import img3 from './assets/3-lastly.jpg';
import img4 from './assets/4-lerkrat-tangsri.jpg';
import img5 from './assets/5-pixabay.jpg';


const images = [img1, img2, img3, img4, img5];


const App = () => {
  return (
    <ThemeProvider>
        <Header />
        <Gallery images={images} />
        <Footer />
    </ThemeProvider>
  );
};

export default App;
