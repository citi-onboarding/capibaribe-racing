
import { useState } from 'react';
import {
  AboutCarAndSae,
  Contacts,
  NavBar,
  Banner,
  Backers,
  Footer,
} from './components/index.jsx';

function App() {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <NavBar menu={menu} setMenu={setMenu} />
      <Banner />
      <AboutCarAndSae menu={menu} setMenu={setMenu} />
      <Backers />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
