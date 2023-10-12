import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getOneUserRequest } from "../api/User.js";
import Cookies from "js-cookie";
/* imports */
import kairo from "../assets/kairo.png";
/* css */
import "./css/login.css";
export default function AuthSuccess() {
  const token = Cookies.get("token");
  const userId = token ? JSON.parse(atob(token.split(".")[1]))?.id : null;

  const {
    isLoading,
    data: user,
    isError,
    error,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: ({ queryKey }) => getOneUserRequest(queryKey[1]),
    refetchOnWindowFocus: false,
  });
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="text-3xl">Loading....</div>
      </div>
    );
  } else if (isError) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div>Error: {error.message}</div>
      </div>
    );
  }

  setTimeout(() => {
    navigate("/dashboard");
  }, 5000);

  return (
    <div className="bglogin h-screen w-full flex justify-center ">
      <div className="h-fit w-3/4 md:w-5/12 self-center bg-white rounded-3xl p-10 animate-fade-up animate-ease-in">
        <div>
          <img src={kairo} alt="..." className="w-3/12 md:w-20 mx-auto" />
          <h1 className="text-center text-black text-lg font-thin">MEDIA</h1>
        </div>
        <div>
          <h1 className="text-center text-black text-3xl mt-5">
            Bienvenido de nuevo
          </h1>
          <img
            src="https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_800_800/0/1516929468945?e=2147483647&v=beta&t=d5P5hoCOyufB3Qkq935Dn4jIIpyoMVX_FweqCM3erjE"
            alt="..."
            className="rounded-full w-28 mx-auto my-5"
          />
          <h1 className="text-center text-black text-3xl">
            {user.completeName}
          </h1>
          <p className="text-center text-black mt-3 font-thin text-md">
            {user.rol}
          </p>
        </div>
      </div>
    </div>
  );
}
