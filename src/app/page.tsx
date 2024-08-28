import HeroSection from '@/components/home/HeroSection';
import MoreBorder from '@/components/home/Border'
import ItemsStats from '@/components/home/ItemsStats'
import { SplitScreen } from '@/components/home/SplitScreen'
import MarketingComparison from '@/components/home/Compair'
import StretchingSection from '@/components/home/StretchingSection'
import SvgGraph from '@/components/home/SvgGraph'
import CardContainer from '@/components/home/CardContainer'
import ValueProp from '@/components/home/ValueProp'
import Aboutus from '@/components/home/Aboutus'
import OurGoal from '@/components/home/OurGoal'
import SvgProses from '@/components/home/SvgProses'
import FAQSection from '@/components/home/FAQSection';
import ChatBotIframe from '@/components/ChatBotIframe';
import Conclusion from '@/components/home/Conclusion';
import Slider from '@/components/home/Slider';

const Home = () => {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <Slider />
      <MoreBorder />
      <ItemsStats />
      <SplitScreen />
      <MarketingComparison />
      <StretchingSection />
      <SvgGraph />
      <CardContainer />
      <ValueProp />
      <Aboutus />
      <OurGoal />
      <SvgProses />
      <FAQSection />
      <Conclusion />
    </div>
  );
};

export default Home;
