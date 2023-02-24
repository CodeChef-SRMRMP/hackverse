import React from 'react'
import SponsorImg from "../assets/images/sponsor-blank.png"
const Sponsors = () => {

    const diamondSponsors = [
        {
            img: SponsorImg,
            title: "sponsor 1",
        },
        {
            img: SponsorImg,
            title: "sponsor 2",
        },
        {
            img: SponsorImg,
            title: "sponsor 3",
        },
        {
            img: SponsorImg,
            title: "sponsor 4",
        },
        {
            img: SponsorImg,
            title: "sponsor 5",
        },
        {
            img: SponsorImg,
            title: "sponsor 6",
        },
        {
            img: SponsorImg,
            title: "sponsor 7",
        },
    ]
    const goldenSponsors = [
        {
            img: SponsorImg,
            title: "sponsor 1",
        },
        {
            img: SponsorImg,
            title: "sponsor 2",
        },
        {
            img: SponsorImg,
            title: "sponsor 3",
        },
        {
            img: SponsorImg,
            title: "sponsor 4",
        },
        {
            img: SponsorImg,
            title: "sponsor 5",
        },
        {
            img: SponsorImg,
            title: "sponsor 6",
        },
        {
            img: SponsorImg,
            title: "sponsor 7",
        },
    ]
    const silverSponsors = [
        {
            img: SponsorImg,
            title: "sponsor 1",
        },
        {
            img: SponsorImg,
            title: "sponsor 2",
        },
        {
            img: SponsorImg,
            title: "sponsor 3",
        },
        {
            img: SponsorImg,
            title: "sponsor 4",
        },
        {
            img: SponsorImg,
            title: "sponsor 5",
        },
        {
            img: SponsorImg,
            title: "sponsor 6",
        },
        {
            img: SponsorImg,
            title: "sponsor 7",
        },
    ]
    return (
        <div className="m-10 mx-5 md:mx-10 lg:mx-20">
            <h1 className="dark:text-white text-5xl text-left">Our Sponsors</h1>
            <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20 rounded-md">
                <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6 items-start justify-center md:justify-between lg:justify-evenly rounded-md text-white">
                    <div className="-space-y-3 ">
                        <p className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left">Diamond Sponsors</p>
                    </div>
                    {
                        diamondSponsors.map((sponsor, index) => (
                            <div key={index} className="">
                                <img src={sponsor.img} alt={sponsor.title} className="w-full h-full rounded-md"/>
                                <h1 className="text-center">{sponsor.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20 rounded-md">
                <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6 items-start justify-center md:justify-between lg:justify-evenly rounded-md text-white">
                    <div className="-space-y-3 ">
                        <p className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left">Golden Sponsors</p>
                    </div>
                    {
                        goldenSponsors.map((sponsor, index) => (
                            <div key={index} className="">
                                <img src={sponsor.img} alt={sponsor.title} className="w-full h-full rounded-md"/>
                                <h1 className="text-center">{sponsor.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20 rounded-md">
                <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6 items-start justify-center md:justify-between lg:justify-evenly rounded-md text-white">
                    <div className="-space-y-3 ">
                        <p className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left">Silver Sponsors</p>
                    </div>
                    {
                        silverSponsors.map((sponsor, index) => (
                            <div key={index} className="">
                                <img src={sponsor.img} alt={sponsor.title} className="w-full h-full rounded-md"/>
                                <h1 className="text-center">{sponsor.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sponsors