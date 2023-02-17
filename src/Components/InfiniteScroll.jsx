import Slider from 'infinite-react-carousel';
import './index.css';
import GDSC from '../assets/gdsc.png';
import Kanalabs from '../assets/kanalabs.png';
import Koii from '../assets/koii.png';
import DigitalOcean from '../sampleAssets/1.png';

const Carousel = () => {
  return (
    <div className="w-screen overflow-hidden px-5">
      <h1 className="text-black text-center dark:text-white  font-bold text-3xl font-koulen mt-10 mb-5 ">
        Community Partners
      </h1>

      <Slider dots={true} autoplay={true} arrows={false}>
        <div className="h-40 w-screen bg-[#202021] rounded-xl pb-7">
          <div className="flex w-full h-full items-center justify-center">
            <img src={GDSC} alt={'GDSC'} className=" w-3/5   " />
          </div>
        </div>
        <div className="h-40 w-screen bg-[#202021]  rounded-xl pb-7 ">
          <div className="flex w-full h-full items-center justify-center">
            <img src={Koii} alt={'GDSC'} className=" w-3/5 " />
          </div>
        </div>
        <div className="h-40 w-screen bg-[#202021]  rounded-xl pb-7 ">
          <div className="flex w-full h-full items-center justify-center">
            <img src={DigitalOcean} alt={'GDSC'} className=" w-3/5 " />
          </div>
        </div>
        <div className="h-40 w-screen bg-[#202021]  rounded-xl pb-7 ">
          <div className="flex w-full h-full items-center justify-center">
            <img src={Kanalabs} alt={'GDSC'} className=" w-3/5 " />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
