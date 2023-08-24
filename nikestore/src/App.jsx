import { CustomerReviews, 
  Footer , 
  Hero, 
  PopularProducts , 
  Services ,
  Subscribe , 
  SuperQuality } from "./sections/index";

import Nav from './components/Nav.jsx';
const App = () =>  {
  return (
  <main className="relative">
    <Nav/>
  <section className="xl:padding-1  
            wide:padding padding-b">
    <Hero/>
  </section>
  <section className="padding">
    <PopularProducts/>
  </section>
  <section className="bg-pale-blue padding">
    <CustomerReviews/>
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe/>
  </section>
  <section className="bg-black padding-x padding-t pb-8">
    <Footer/>
  </section>
  </main>
  )
}

export default App;