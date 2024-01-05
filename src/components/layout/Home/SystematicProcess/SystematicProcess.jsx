import React, { memo } from "react";
import PlainCard from "@/components/shared/PlainCard/PlainCard";

const SystematicProcess = () => {
  return (
    <div
      data-aos={"fade-up"}
      className="w-full container gap-3 justify-center align-middle grid-rows-2 mt-8 mb-8"
    >
      <h1 className="text-3xl text-center text-slate-700 mt-4 lg:text-[3rem] font-bold mb-16 ">
        A Systematic Process That Delivers Excellence
      </h1>
      {processSteps.map((step, index) => (
        <div  className={`flex ${
          index % 2 === 0
            ? "justify-start mt-3 w-full"
            : "flex justify-end align-baseline items-end mt-3 w-full"
        } lg:flex`}>
          <div
            key={index}
            className={`flex ${
              index % 2 === 0
                ? "justify-start md:w-2/4 lg:w-2/4 "
                : "flex justify-end align-baseline items-end md:w-2/4 lg:w-2/4"
            } lg:flex`}
          >
            <PlainCard
              withIcon={false}
              icon={null}
              mode={"dark"}
              title={step.title}
              description={step.description}
              animation={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const processSteps = [
  {
    title: "1. Understanding Client Needs",
    description:
      "Before embarking on any project, we engage in thorough discussions with our clients to understand their unique needs, goals, and expectations. We prioritize active listening and open communication to gain insights into the specific requirements and desired outcomes.",
  },
  {
    title: "2. Strategic Planning",
    description:
      "Based on the information gathered, we develop a comprehensive and strategic plan that outlines the project scope, milestones, and deliverables. Our planning phase involves collaborative sessions with stakeholders to align project objectives with organizational goals.",
  },
  {
    title: "3. Cross-Functional Collaboration",
    description:
      "We foster a culture of collaboration among cross-functional teams. Our approach involves bringing together diverse expertise to ensure a holistic perspective on projects. Collaboration encourages creativity, innovation, and the generation of unique solutions to complex challenges.",
  },
  {
    title: "4. Agile Development",
    description:
      "We adopt agile methodologies to ensure flexibility and adaptability throughout the project lifecycle. Regular feedback loops, incremental development, and iterative improvements allow us to respond swiftly to changing requirements and market dynamics.",
  },
  {
    title: "5. Quality Assurance",
    description:
      "Our commitment to excellence is upheld through rigorous quality assurance processes. This includes thorough testing, code reviews, and continuous evaluation of project components. Quality assurance is embedded into every stage of development, ensuring that the final deliverables meet the highest standards.",
  },
  {
    title: "6. Client Involvement",
    description:
      "Clients are considered integral partners in the development process. We encourage active client involvement through regular updates, demos, and feedback sessions. Client input is valued, and adjustments are made promptly to align with evolving client expectations.",
  },
  {
    title: "7. Continuous Improvement",
    description:
      "We believe in a culture of continuous improvement. Post-project evaluations, retrospectives, and lessons learned sessions contribute to refining our processes. Feedback from team members, clients, and stakeholders is analyzed to identify areas for enhancement and optimization.",
  },
  {
    title: "8. Client Satisfaction Surveys",
    description:
      "Upon project completion, we conduct client satisfaction surveys to gather valuable insights into the client's experience. Feedback obtained from clients is used to refine our processes, address areas for improvement, and enhance overall service delivery.",
  },
];

export default memo(SystematicProcess);
