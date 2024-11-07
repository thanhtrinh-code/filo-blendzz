import AboutMe from './_home/AboutMe';
import AboutMePhoto from './_home/AboutMePhoto';
import Address from './_home/Address';
import HairWork from './_home/HairWork';
import Hero from './_home/Hero';
import Place from './_home/Place';
import Profile from './_home/Profile';
import Services from './_home/Services';
import Testimonial from './_home/Testimonial';
import Video from './_home/Video';

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutMe/>
      <AboutMePhoto/>
      <Services/>
      <HairWork/>
      <Testimonial/>
      <Place/>
      <Address/>
      <Profile/>
      <Video/>
    </>
  );
}
