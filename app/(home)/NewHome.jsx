import BgGlassmorphism from "@/components/TailwindSearchComp/BgGlassmorphism";
import MainNav from "./MainNav";
import SectionHero from "./SectionHero";
import TrendingPackageHome from "@/components/TailwindSearchComp/trendingPackage/TrendingPackageHome";
import BackgroundSection from "@/components/TailwindSearchComp/shared/BackgroundSection";
import CountryPackage from "@/components/TailwindSearchComp/countryPackage/CountryPackage";
import FlightSuggestion from "@/components/TailwindSearchComp/flightSuggestion/FlightSuggestion";
import WhyChooseUsTailwind from "@/components/TailwindSearchComp/WhyChooseUsTailwind";
import FooterNav from "@/components/TailwindSearchComp/mainNav/footerNav/FooterNav";

function NewHome() {
  return (
    <>
      <MainNav />
      <main className="nc-PageHome relative overflow-hidden">
        {/* GLASSMOPHIN */}
        <BgGlassmorphism />
        <div className="custom-container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          {/* SECTION HERO */}
          <SectionHero className="pt-10 lg:pt-8 lg:pb-48" />

          {/* SECTION 1 */}
          {/* <SectionSliderNewCategories categories={DEMO_CATS} /> */}
          <TrendingPackageHome className="pt-10 lg:pt-8 " />

          <div className="relative py-16">
            <BackgroundSection className="bg-orange-50" />
            <CountryPackage className=" " />
          </div>

          <FlightSuggestion />

          <div className="py-16">
            <WhyChooseUsTailwind />
          </div>
        </div>
      </main>
      <FooterNav />
    </>
  );
}

export default NewHome;
