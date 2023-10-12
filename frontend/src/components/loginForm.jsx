import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
/* imports */
import kairo from "../assets/kairo.png";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const onSubmit = handleSubmit((data) => {
    login.mutate(data);
    reset();
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/success");
    }
  });

  return (
    <div className="h-screen w-full flex justify-center animate-fade-up animate-ease-in">
      <div className="w-11/12  md:w-3/6 lg:w-5/12 self-center bg-white rounded-2xl flex flex-col px-10 py-5">
        <div>
          <img src={kairo} alt="..." className="w-3/12 md:w-28 mx-auto" />
          <h1 className="text-center text-black text-lg font-thin">MEDIA</h1>
        </div>
        <div>
          <h1 className="text-center text-black text-xl lg:text-3xl mt-5 w-3/4 mx-auto">
            Bienvenido al panel digital de KARIO Media
          </h1>
          <p className="text-center text-black w-3/4 mx-auto mt-4">
            Por favor ingresa los siguientes datos para ingresar a la plataforma
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mt-5 w-full md:w-3/4 mx-auto">
            <label htmlFor="username" className="text-black text-xl font-thin">
              Usuario
            </label>
            <input
              type="text"
              name="username"
              className="mt-1 border-solid border text-2xl text-black border-black p-1 w-full rounded-xl bg-white border-spacing-1"
              {...register("user", {
                required: { value: true, message: "User is required" },
                minLength: {
                  value: 4,
                  message: "Minimum User 4 Characters",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum User 20 Characters",
                },
              })}
            />
            {errors.user && (
              <span className="text-red-400">{errors.user.message} </span>
            )}
          </div>
          <div className="mt-5 w-full md:w-3/4 mx-auto">
            <label htmlFor="password" className="text-black text-xl font-thin">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 border-solid border text-2xl text-black border-black p-1 w-full rounded-xl bg-white border-spacing-1"
              {...register("password", {
                required: { value: true, message: "Password is Required" },
                minLength: {
                  value: 4,
                  message: "Password with minimum 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-400">{errors.password.message} </span>
            )}
          </div>
          <div className="mt-5 mx-auto text-center">
            <button
              className="p-4 rounded-full w-3/4  md:w-80 bg-orange-500"
              /* onClick={() => {
                window.location.href = "/success";
              }} */
            >
              Ingresar
            </button>
            <p className="text-center text-black mt-5 text-sm font-thin">
              Tienes problemas para ingresar? Por favor contactarse con
              asistencia técnica lo más pronto posible
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
