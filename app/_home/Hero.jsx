import LeftHero from './LeftHero';
import RightHero from './RightHero';

export default function Hero() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center w-full px-3 lg:pl-20 pt-5 lg:pt-10">
      {/* Left Content Section */}
      <LeftHero/>
      <RightHero/>
    </div>
  )
}
