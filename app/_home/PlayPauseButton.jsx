import { FaCirclePause , FaCirclePlay} from "react-icons/fa6";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function PlayPauseButton({paused, setPaused, setForward}) {
  return (
    <div className="flex items-center justify-center space-x-4 mt-6">
    {/* Left Arrow Button */}
    <button className="p-2 bg-white text-[#7B3F00] rounded-full shadow-md hover:bg-gray-200 transition" onClick={() => setForward((forward) => !forward)}>
        <FaArrowAltCircleLeft size={24} />
    </button>

    {/* Play/Pause Button */}
    <button
        onClick={() => setPaused(!paused)}
        className="p-3 bg-white text-[#7B3F00] rounded-full shadow-md hover:bg-gray-200 transition"
    >
        {paused ? <FaCirclePlay size={24} /> :<FaCirclePause size={24} /> }
    </button>

    {/* Right Arrow Button */}
    <button className="p-2 bg-white text-[#7B3F00] rounded-full shadow-md hover:bg-gray-200 transition" onClick={() => setForward((forward) => !forward)}>
        <FaArrowAltCircleRight size={24} />
    </button>
</div>

  )
}
