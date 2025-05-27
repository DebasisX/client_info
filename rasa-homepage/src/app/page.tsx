import Header from "@/components/Header/Header";
import CategorySection from "@/components/CategorySection/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ShirtSection from "@/components/ShirtSection/ShirtSection";
import TShirtSection from "@/components/TShirtSection/TShirtSection";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
// import NewsletterSignup from "@/components/Chatbox/Chatbox";
import Footer from "@/components/Footer/Footer";
// import Chatbox from "@/components/Chatbox/Chatbox";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <HeroSection />
        <FeaturedProducts />
        <CategorySection />
        <ShirtSection/>
        <TShirtSection/>
        {/* <Chatbox /> */}
      </main>
      <Footer />
    </>
  );
}
