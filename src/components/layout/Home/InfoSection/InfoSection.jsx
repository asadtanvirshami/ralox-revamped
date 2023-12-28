import React from 'react'
import Image from 'next/image'
import { CardHeader, Card } from '@nextui-org/react'
import PlainCard from '@/components/shared/PlainCard/PlainCard'
import Count from '../CountUp/CountUp'

import gif from "../../../../../public/images/2D/bulb.jpg";

const InfoSection = () => {
  return (
    <div
    data-aos={"fade-up"}
    className="w-2/3 gap-3 grid grid-cols-12 m-3 justify-center align-middle grid-rows-2 mt-6 mb-6"
  >
    <Count />
    <div className="row lg:flex">
      <div className="lg:col-5" data-aos="fade-up-right">
        <Card className="w-full md:w-full lg:w-full sm:col-span-4 ">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            src={gif}
            className="z-0 w-12 h-[32rem] object-cover"
          />
        </Card>
      </div>

      <PlainCard
        mode={"dark"}
        title={"  A Platform of Skilled Engineers"}
        animation={"fade-up-left"}
        description={
          "Algorim helps you reach your target audience and connect with them like never before. Every project we work on is created from scratch by our talented team of designers, developers, and creatives. We can create anything your business needs to rise above the competition and make a real impact. Traditionalways are passe: Today digital world requires unconventionaldesigns that work across every platform and attract the customers you want to reach: Our creative team is well versed in the latest UX design trends and is ready to build the perfect experience for your brand. Create compelling experiences that turn your customers into raving fans. At  Algorim, we believe that experience is everything."
        }
      />
    </div>
    <div className="row lg:flex">
      <PlainCard
        mode={"dark"}
        animation={"fade-up-right"}
        title={
          "Think of us as an extension of your organization, working tirelessly to give you the results that will take you to the top."
        }
        description={
          " Our years of experience in the software industry set us apart. With a track record of successful projects and satisfied clients, we bring a wealth of expertise to every endeavor. Your needs are at the heart of everything we do. Our customer-centric approach ensures that we not only meet butexceed your expectations, delivering solutions that align perfectly with your business goals. In the ever-evolving world of technology, we stay ahead of the curve. Alogrim is committed to innovation, always exploring new technologies and methodologies to keep your business at the forefront of the digital landscape."
        }
      />
      <div className="lg:col-5" data-aos="fade-up-left">
        <Card className="w-full md:w-full lg:w-full sm:col-span-4 ">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            src={gif}
            className="z-0 w-12 h-[32rem] object-cover"
          />
        </Card>
      </div>
    </div>
  </div>
  )
}

export default InfoSection