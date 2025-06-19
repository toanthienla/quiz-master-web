import { useState, useEffect } from "react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import FAQSection from "~/components/Home/FAQSection";
import FeaturesSection from "~/components/Home/FeaturesSection";
import HowItWorksSection from "~/components/Home/HowItWorksSection";
import HeroSection from "~/components/Home/HeroSection";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(null);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar isLoggedIn={user !== null} />

      {/* Hero Section */}
      <section className="bg-base-100 pt-50 pb-28">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section className="bg-base-200/50 pt-20 pb-20" id="next">
        <FeaturesSection />
      </section>

      {/* How It Works */}
      <section className="bg-base-200/50 pb-20">
        <HowItWorksSection />
      </section>

      {/* FAQ */}
      <section className="bg-base-100 py-20">
        <FAQSection />
      </section>

      <Footer />
    </div>
  );
}