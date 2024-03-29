
import HomeWelcome from "./components/HomeWelcome";
import FeaturedList from "./components/FeaturedList";
import PromotionsList from "./components/PromotionsList";
import WhyUs from "./components/WhyUs";

function HomePage() {
 
    return (
        <>
        <div className="websiteContent">
        <HomeWelcome/>
        <FeaturedList/>
        <PromotionsList/>
        <WhyUs/>
        </div>
        </>
    )
 
}

export default HomePage