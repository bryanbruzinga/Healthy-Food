import Header from "../components/Header";
import BlogSection from "../components/BlogSection";
import MainSection from "../components/MainSection";
import MembershipSection from "../components/MembershipSection";
import RecipesSection from "../components/RecipesSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <RecipesSection />
      <ServicesSection />
      <BlogSection />
      <MembershipSection />
    </>
  );
}
