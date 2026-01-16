import Layout from "./app/layout";
import HeroPage from "./templates/home/Hero";
import Expertise from "./templates/home/Expertise";
import Testimonials from "./templates/home/Clients";
import FAQ from "./templates/home/Faq";

function App() {
  return (
    <Layout>
      <section id="home">
        <HeroPage />
      </section>

      <section id="services">
        <Expertise />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>
    </Layout>
  );
}

export default App;
