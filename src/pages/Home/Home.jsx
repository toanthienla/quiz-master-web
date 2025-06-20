import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import FAQSection from "~/components/Home/FAQSection";
import FeaturesSection from "~/components/Home/FeaturesSection";
import HowItWorksSection from "~/components/Home/HowItWorksSection";
import HeroSection from "~/components/Home/HeroSection";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar user={user} />

      {/* Hero Section */}
      <section className="bg-base-200/50 pt-50 pb-28">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section className="bg-base-100 pt-20 pb-20" id="next">
        <FeaturesSection />
      </section>

      {/* How It Works */}
      <section className="bg-base-100 pb-20">
        <HowItWorksSection />
      </section>

      {/* FAQ */}
      <section className="bg-base-200/50 py-20">
        <FAQSection />
      </section>

      <Footer />
    </div>
  );
}