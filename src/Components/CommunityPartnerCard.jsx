import Slider from 'infinite-react-carousel';
import './CommunityPartnerCard.css';
import GDSC from '../assets/gdsc.png';
import Kanalabs from '../assets/kanalabs.png';
import Koii from '../assets/koii.png';
import DigitalOcean from '../sampleAssets/1.png';

const CommunityPartnerCard = () => {
  return (
    <div className="w-screen overflow-hidden ">
      <h1 className="text-black text-center dark:text-white  font-bold text-3xl font-koulen mt-10 mb-5 ">
        Community Partners
      </h1>

      {/* Mobile */}
      <div className="sm:hidden">
        <Slider dots={true} autoplay={false} arrows={false}>
          <div className="h-40  w-[420px] bg-[#202021] rounded-xl pb-7">
            <div className="flex  w-full h-full items-center justify-center">
              <img src={GDSC} alt={'GDSC'} className=" w-3/5   " />
            </div>
          </div>
          <div className="h-40  w-screen bg-[#202021] rounded-xl pb-7 ">
            <div className="flex w-full h-full items-center justify-center">
              <img src={Koii} alt={'GDSC'} className=" w-3/5 " />
            </div>
          </div>
          <div className="h-40  w-screen bg-[#202021] rounded-xl pb-7 ">
            <div className="flex w-full h-full items-center justify-center">
              <img src={DigitalOcean} alt={'GDSC'} className=" w-3/5 " />
            </div>
          </div>
          <div className="h-40  w-screen bg-[#202021]  rounded-xl pb-7 ">
            <div className="flex w-full h-full items-center justify-center">
              <img src={Kanalabs} alt={'GDSC'} className=" w-3/5 " />
            </div>
          </div>
        </Slider>
      </div>

      {/* Tablet */}
      <div className="hidden sm:block lg:hidden">
        <Slider dots={true} autoplay={false} arrows={false}>
          <div className="h-[11rem] bg-[#202021] rounded-xl pb-7">
            <div className="flex h-full  w-full  items-center justify-around">
              <img src={GDSC} alt={'GDSC'} className=" w-1/2 px-10" />
              <img src={Kanalabs} alt={'GDSC'} className=" w-1/2 px-10" />
            </div>
          </div>
          <div className="h-[11rem]  bg-[#202021] rounded-xl pb-7">
            <div className="flex h-full  w-full  items-center justify-around">
              <img src={DigitalOcean} alt={'GDSC'} className=" w-[45%] px-10" />
              <img src={Koii} alt={'GDSC'} className=" w-2/5 px-10" />
            </div>
          </div>
        </Slider>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block xl:hidden">
        <Slider dots={true} autoplay={false} arrows={false}>
          <div className="h-[12rem]  bg-[#202021] rounded-xl pb-7">
            <div className="flex h-full  w-full  items-center justify-around">
              <img src={GDSC} alt={'GDSC'} className=" w-1/3 px-5" />
              <img src={Kanalabs} alt={'GDSC'} className=" w-1/3 px-5" />
              <img src={DigitalOcean} alt={'GDSC'} className=" w-1/3 px-5" />
            </div>
          </div>
          <div className="h-[12rem]  bg-[#202021] rounded-xl pb-7">
            <div className="flex h-full  w-full  items-center justify-around">
              <img src={DigitalOcean} alt={'GDSC'} className=" w-1/3 px-5" />
              <img src={Koii} alt={'GDSC'} className=" w-2/8 px-5" />
              <img src={Kanalabs} alt={'GDSC'} className=" w-1/3 px-5" />
            </div>
          </div>
        </Slider>
      </div>

      {/* Large Desktop */}
      <div className="hidden  xl:block">
        <Slider dots={true} autoplay={false} arrows={false}>
          <div className="h-[13rem]  bg-[#202021] rounded-xl pb-7">
            <div className="flex h-full  w-full  items-center justify-around">
              <img src={GDSC} alt={'GDSC'} className=" w-1/4 px-10" />
              <img src={Kanalabs} alt={'GDSC'} className=" w-1/4 px-10" />
              <img src={Kanalabs} alt={'GDSC'} className=" w-1/4 px-10" />
              <img src={DigitalOcean} alt={'GDSC'} className=" w-1/4 px-10" />
            </div>
          </div>
          <div className="h-[13rem]   bg-[#202021] rounded-xl pb-7">
            <div className="flex h-full  w-full  items-center justify-around">
              <img src={DigitalOcean} alt={'GDSC'} className=" w-1/4 px-10" />
              <img src={GDSC} alt={'GDSC'} className=" w-1/4 px-10" />
              <img src={Kanalabs} alt={'GDSC'} className=" w-1/4 px-10" />
              <img src={Koii} alt={'GDSC'} className=" w-1/4 px-10" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CommunityPartnerCard;
