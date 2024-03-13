import ReactGA from "react-ga4";

ReactGA.initialize("your GA measurement id");

export const initGA = () => {
  initializeGA(process.env.NEXT_PUBLIC_GOOGLE_ID);
};