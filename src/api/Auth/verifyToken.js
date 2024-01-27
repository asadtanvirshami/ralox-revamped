import axios from "axios";

const verifyToken = async(Cookies, req, res) => {
  const cookies = new Cookies(req, res);
  const token = await cookies.get('token')
  const sessionRequest = await axios.get(process.env.NEXT_PUBLIC_AUTH_VERIFY_SESSION,{
    headers:{"x-access-token": `${token}`}
  }).then((x)=>x.data);

  return sessionRequest
}

export default verifyToken