
import { useState } from 'react';
import {
  NavBar,
  Banner,
  AboutUs,
  AboutCarAndSae,
  Backers,
  Contacts,
  Footer,
} from './components/index.jsx';

function App() {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <NavBar menu={menu} setMenu={setMenu} />
      <Banner />
      <AboutUs />
      <AboutCarAndSae menu={menu} setMenu={setMenu} />
      <Backers />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
