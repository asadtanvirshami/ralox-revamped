// pages/project/[id].js

import { getProjectById } from "@/api/Projects";
import ProjectInfo from "@/components/layout/Projects/ProjectInfo";

export async function getStaticPaths() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_GET_PROJECT_IDS}`);
  const projects = await response.json();

  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  try {
    const data = await getProjectById(params.id);

    return {
      props: { data },
      revalidate: 60 * 60,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: null },
    };
  }
}

const ProjectPage = ({ data }) => {
  return <div className="container justify-center flex align-middle mx-auto"><ProjectInfo data={data} /></div> ;
};

export default ProjectPage;
