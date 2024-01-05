import React, { memo } from "react";
import Image from "next/image";
import { CardHeader, Card } from "@nextui-org/react";
import PlainCard from "@/components/shared/PlainCard/PlainCard";
import Count from "../CountUp/CountUp";
import gif from "../../../../../public/images/2D/bulb.jpg";

const InfoSection = () => {
  return (
    <div className="container mx-auto gap-3 justify-center align-middle grid grid-rows-2 md:grid-rows-1 mt-6 mb-6">
      <div className="flex">
        <Count />
      </div>

      <div className="md:flex mt-8">
        {/* Column 1 */}
        <div className="md:w-full mb-8 md:mb-0" data-aos="fade-up-right">
          <Card className="w-full">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
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
              className="z-0 w-full h-[32rem] object-cover"
            />
          </Card>
        </div>

        {/* Column 2 */}
        <div className="md:w-2/2 flex w-fit mb-8 md:mb-0">
          <PlainCard
            withIcon={false}
            mode="dark"
            title="A Platform of Skilled Engineers"
            animation="fade-up-left"
            description={
              "Algorim helps you reach your target audience and connect with them like never before. Every project we work on is created from scratch by our talented team of designers, developers, and creatives. We can create anything your business needs to rise above the competition and make a real impact. Traditional ways are passe: Today, the digital world requires unconventional designs that work across every platform and attract the customers you want to reach. Our creative team is well versed in the latest UX design trends and is ready to build the perfect experience for your brand. Create compelling experiences that turn your customers into raving fans. At Algorim, we believe that experience is everything."
            }
          />
        </div>
      </div>

      <div className="md:flex mt-8">
        {/* Column 3 */}
        <div className="md:w-2/2 flex w-fit mb-8 md:mb-0">
          <PlainCard
            withIcon={false}
            mode="dark"
            title="A Platform of Skilled Engineers"
            animation="fade-up-right"
            description={
              "Algorim helps you reach your target audience and connect with them like never before. Every project we work on is created from scratch by our talented team of designers, developers, and creatives. We can create anything your business needs to rise above the competition and make a real impact. Traditional ways are passe: Today, the digital world requires unconventional designs that work across every platform and attract the customers you want to reach. Our creative team is well versed in the latest UX design trends and is ready to build the perfect experience for your brand. Create compelling experiences that turn your customers into raving fans. At Algorim, we believe that experience is everything."
            }
          />
        </div>

        {/* Column 4 */}
        <div className="md:w-full" data-aos="fade-up-left">
          <Card className="w-full">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
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
              className="z-0 w-full h-[32rem] object-cover"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default memo(InfoSection);
