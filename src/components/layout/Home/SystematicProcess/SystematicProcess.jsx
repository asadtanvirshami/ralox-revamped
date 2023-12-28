import React from "react";
import PlainCard from "@/components/shared/PlainCard/PlainCard";

const SystematicProcess = () => {
  return (
    <div
      data-aos={"fade-up"}
      className="w-2/3 gap-3 grid grid-cols-12 justify-center align-middle grid-rows-2 mt-8 mb-8"
    >
      <h1 className="text-3xl text-center lg:text-6xl font-bold mb-8 ">
        A Systematic Process That Delivers Excellence
      </h1>
      <div className="row lg:flex">
        <PlainCard
          withIcon={false}
          icon={null}
          mode={"dark"}
          title={"1. Understanding Client Needs"}
          description={
            "Before embarking on any project, we engage in thorough discussions with our clients to understand their unique needs, goals, and expectations. We prioritize active listening and open communication to gain insights into the specific requirements and desired outcomes."
          }
          animation={"fade-up-right"}
        />
      </div>
      <div className="row justify-end lg:flex">
        <PlainCard
          withIcon={false}
          icon={null}
          mode={"dark"}
          title={"2. Strategic Planning"}
          description={
            "Based on the information gathered, we develop a comprehensive and strategic plan that outlines the project scope, milestones, and deliverables.Our planning phase involves collaborative sessions with stakeholders to align project objectives with organizational goals."
          }
          animation={"fade-up-left"}
        />
      </div>
      <div className="row lg:flex">
        <PlainCard
          withIcon={false}
          icon={null}
          mode={"dark"}
          title={"3. Cross-Functional Collaboration"}
          description={
            "We foster a culture of collaboration among cross-functional teams. Our approach involves bringing together diverse expertise to ensure a holistic perspective on projects. Collaboration encourages creativity, innovation, and the generation of unique solutions to complex challenges."
          }
          animation={"fade-up-right"}
        />
      </div>
      <div className="row justify-end  lg:flex">
        <PlainCard
          withIcon={false}
          icon={null}
          mode={"dark"}
          title={"4. Agile Development"}
          description={
            "We adopt agile methodologies to ensure flexibility and adaptability throughout the project lifecycle. Regular feedback loops, incremental development, and iterative improvements allow us to respond swiftly to changing requirements and market dynamics."
          }
          animation={"fade-up-left"}
        />
      </div>
      <div className="row lg:flex">
        <PlainCard
          withIcon={false}
          icon={null}
          mode={"dark"}
          title={"5. Quality Assurance"}
          description={
            "Our commitment to excellence is upheld through rigorous quality assurance processes. This includes thorough testing, code reviews, and continuous evaluation of project components. Quality assurance is embedded into every stage of development, ensuring that the final deliverables meet the highest standards."
          }
          animation={"fade-up-right"}
        />
      </div>
      <div className="row justify-end  lg:flex">
        <PlainCard
          withIcon={false}
          icon={null}
          mode={"dark"}
          title={"6. Client Involvement"}
          description={
            "Clients are considered integral partners in the development process. We encourage active client involvement through regular updates, demos, and feedback sessions. Client input is valued, and adjustments are made promptly to align with evolving client expectations."
          }
          animation={"fade-up-left"}
        />
      </div>
      <div className="row lg:flex">
        <PlainCard
          withIcon={false}
          icon={null}
          mode={"dark"}
          title={"7. Continuous Improvement"}
          description={
            "We believe in a culture of continuous improvement. Post-project evaluations, retrospectives, and lessons learned sessions contribute to refining our processes. Feedback from team members, clients, and stakeholders is analyzed to identify areas for enhancement and optimization."
          }
          animation={"fade-up-right"}
        />
      </div>

      <div className="row justify-end  lg:flex">
        <PlainCard
          withIcon={false}
          icon={null}
          mode={"dark"}
          title={"8. Client Satisfaction Surveys"}
          description={
            "Upon project completion, we conduct client satisfaction surveys to gather valuable insights into the client's experience. Feedback obtained from clients is used to refine our processes, address areas for improvement, and enhance overall service delivery."
          }
          animation={"fade-up-left"}
        />
      </div>
    </div>
  );
};

export default SystematicProcess;
