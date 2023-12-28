/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { RiCodeSSlashFill } from "react-icons/ri";
import PlainCard from '@/components/shared/PlainCard/PlainCard'

const ServicesSection = () => {
  return (
    <div
    data-aos={"fade-up"}
    className="w-2/3 gap-3 grid grid-cols-12 justify-center align-middle grid-rows-2 mt-8 "
  >
    <h1 className="text-3xl text-center lg:text-6xl font-bold mb-6 text-slate-300">
      Masters of Our Craft: Here's What We Specialize In
    </h1>
    <div className="row justify-center  lg:flex">
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"Mobile Application Development"}
        mode={"dark"}
        description={
          "In the realm of mobile application development, we specialize in crafting innovative and user-centric solutions that seamlessly integrate with today's dynamic digital landscape. Our approach involves leveraging the latest technologies to design and develop mobile apps for iOS and Android platforms. From conceptualization to deployment, our expert team ensures a smooth and intuitive user experience, coupled with robust backend functionality. Whether it's a native app or a cross-platform solution, we navigate the intricacies of mobile development to deliver applications that meet your business objectives and resonate with your target audience. Trust us to bring your mobile app ideas to life with cutting-edge technology and a focus on user satisfaction."
        }
        animation={"fade-up-left"}
      />
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"CMS Web Application Development"}
        mode={"dark"}
        description={
          "In the domain of CMS (Content Management System) web application development, we specialize in empowering businesses with flexible and user-friendly digital platforms. Our approach involves creating bespoke solutions that enable effortless content creation, publishing, and management. From customizable templates to seamless collaboration tools, our expert team ensures the development of a robust CMS system tailored to meet your content needs. Whether it's a blog, e-commerce site, or corporate portal, we navigate the intricacies of CMS development to deliver a solution that enhances your online presence. Trust us to provide a cutting-edge CMS web application designed for efficiency, scalability, and a superior content management experience."
        }
        animation={"fade-up-left"}
      />
    </div>
    <div className="row justify-center  lg:flex">
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"CRM Web Application Development"}
        mode={"dark"}
        description={
          "In the realm of CRM web application development, we specialize in creating powerful tools to enhance customer relationships and drive business success. Our approach involves crafting intuitive and feature-rich solutions that streamline sales, marketing, and customer service processes. From seamless data integration to personalized user interfaces, our expert team ensures the development of a robust CRM system tailored to your unique needs. With a focus on scalability and user experience, we navigate the complexities of CRM development to deliver a solution that empowers your team, fosters customer loyalty, and fuels growth. Trust us to transform your customer interactions with a cutting-edge CRM web application."
        }
        animation={"fade-up-left"}
      />
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"ERP Web Application Development"}
        mode={"dark"}
        description={
          "In the domain of ERP web application development, we bring a wealth of expertise to streamline and elevate your business processes. Our approach involves crafting tailored solutions that seamlessly integrate modules for finance, human resources, inventory, and more. Meticulous planning and execution ensure the creation of a scalable and efficient ERP system that aligns with your organizational goals. From user-friendly interfaces to robust backend functionality, our expert team navigates the intricacies of ERP development to deliver a comprehensive and cohesive solution, optimizing your business operations for success. Trust us to empower your organization with a cutting-edge ERP web application designed for efficiency and growth."
        }
        animation={"fade-up-left"}
      />
    </div>
    <div className="row justify-center  lg:flex">
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"Website Development"}
        mode={"dark"}
        description={
          "In the dynamic landscape of website development, we specialize in creating innovative and user-centric digital experiences. Our approach involves a seamless blend of cutting-edge technologies and creative design, ensuring the development of visually stunning and highly functional websites. From responsive design to backend architecture, our expert team navigates the complexities of web development to deliver tailored solutions that resonate with your audience. Trust us to bring your online presence to life with websites that are not just visually appealing but also optimized for performance and user engagement."
        }
        animation={"fade-up-left"}
      />
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"Quality Assurance Q/A"}
        mode={"dark"}
        description={
          "In the field of Quality Assurance (Q/A), we excel in upholding the highest standards throughout the software development lifecycle. Our meticulous approach involves thorough testing and validation, guaranteeing the reliability and performance of your applications. With a dedicated team of QA experts, we ensure that every facet of your software meets stringent quality benchmarks, fostering confidence in the seamless functionality of your products. Rely on us for comprehensive Quality Assurance solutions that elevate the overall reliability and performance of your software."
        }
        animation={"fade-up-left"}
      />
    </div>
    <div className="row justify-center  lg:flex">
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"Cyber Security"}
        mode={"dark"}
        description={
          "In the ever-evolving landscape of cybersecurity, we specialize in safeguarding digital assets. Our approach combines advanced technologies with proactive strategies, ensuring comprehensive protection against cyber threats. From threat detection to incident response, our dedicated team employs cutting-edge solutions to fortify your digital infrastructure. Trust us to keep your systems resilient and secure in the face of evolving cyber challenges"
        }
        animation={"fade-up-left"}
      />
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"Artificial Intelligence Development"}
        mode={"dark"}
        description={
          "In the realm of Artificial Intelligence (AI) development, we harness innovative technologies to craft intelligent solutions. Our approach involves meticulous planning and execution, ensuring the creation of robust and adaptive AI systems. From machine learning algorithms to neural network architectures, our expert team navigates the forefront of AI, delivering tailored solutions that empower businesses with smart and scalable capabilities. Trust us to propel your organization into the future with cutting-edge AI development."
        }
        animation={"fade-up-left"}
      />
    </div>
    <div className="row justify-center  lg:flex">
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"POS Web Application Development"}
        mode={"dark"}
        description={
          "In POS web application development, we prioritize precision and transparency, documenting every stage of the process. Our team conducts knowledge-sharing sessions, fostering continuous learning and innovation. Specializing in intuitive user experiences, we deliver tailored solutions for efficient and cutting-edge point-of-sale systems."
        }
        animation={"fade-up-left"}
      />
      <PlainCard
        withIcon={true}
        icon={
          <RiCodeSSlashFill
            fontSize={35}
            color="white"
            className="mr-2"
          />
        }
        title={"Digital Marketing"}
        mode={"dark"}
        description={
          "As a holistic digital marketing service, we meticulously document strategies for PPC, SEO, content writing, and social media management, including Meta Business Suite. Our commitment to knowledge sharing fosters continuous learning, ensuring transparency and client success across these pivotal domains."
        }
        animation={"fade-up-left"}
      />
    </div>
  </div>
  )
}

export default ServicesSection