import axios from "axios";

const verifyLinkToken = async (token) => {
  const sessionRequest = await axios
    .get(process.env.NEXT_PUBLIC_AUTH_VERIFY_LINK, {
      headers: { "x-access-token": `${token}` },
    })
    .then((x) => x.data);

  return sessionRequest;
};

export default verifyLinkToken;
