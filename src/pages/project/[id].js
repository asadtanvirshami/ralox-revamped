import Cookies from "cookies";

import ProjectInfo from "@/components/layout/Projects/ProjectInfo";

import { getProjectById } from "@/api/Projects";
import verifyToken from "@/api/Auth/verifyToken";
import { useRouter } from "next/router";

const ProjectPage = ({ data, sessionData }) => {
  const router = useRouter();
  if (!sessionData.isAuthorized) {
    router.push("/home");
  }
  return (
    <div className="container justify-center flex align-middle mx-auto">
      <ProjectInfo data={data} />
    </div>
  );
};

export default ProjectPage;

export async function getServerSideProps({ params, req, res }) {
  const sessionRequest = await verifyToken(Cookies, req, res);

  try {
    const data = await getProjectById(params.id);

    return {
      props: {
        sessionData: sessionRequest,
        data: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: null, sessionData: { isAuthorized: false } },
    };
  }
}
