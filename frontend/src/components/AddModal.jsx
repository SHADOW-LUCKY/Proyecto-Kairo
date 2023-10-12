import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getUsersRequest } from "../api/User.js";
import { getIndicators } from "../api/indicators.js";
import { postReportRequest } from "../api/Report.js";

export default function AddModal() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addReportMutation = useMutation({
    mutationFn: postReportRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("reports");
    },
  });

  const { isLoading: isLIndicator, data: Indicators } = useQuery({
    queryKey: ["indicators"],
    queryFn: getIndicators,
    refetchOnWindowFocus: false,
  });

  const { isLoading: isLUser, data: Users } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersRequest,
    refetchOnWindowFocus: false,
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const fechaActual = new Date();
    const newReport = {
      ...data,
      fecha_expedited: fechaActual,
    };
    addReportMutation.mutate(newReport);
    reset();
  });

  return (
    <div>
      <input className="modal-state" id="report" type="checkbox" />
      <div className="modal w-screen">
        <label className="modal-overlay" htmlFor="report"></label>
        <div className="modal-content bg-white flex flex-col gap-5 w-11/12 md:w-3/6 lg:w-6/12 text-black">
          <label
            htmlFor="report"
            className="text-black  absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={onSubmit}>
            <div className="mx-auto flex w-full  flex-col gap-6">
              <div className="form-group">
                <h1 class="text-3xl font-semibold">Nuevo Reporte</h1>
                <div className="form-field">
                  <label className="form-label text-black">Nombre</label>
                  <select {...register("user_id")} className="max-w-full input">
                    <option value="">Selecciona un Usuario</option>
                    {isLUser ? (
                      <option>Cargando...</option>
                    ) : (
                      Users.map((usuario) => (
                        <option key={usuario._id} value={usuario._id}>
                          {usuario.completeName}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label text-black">Indicador</label>
                  <div className="form-control w-full flex flex-col">
                    <select
                      {...register("indicators_id")}
                      className="max-w-full input"
                    >
                      <option value="">Selecciona un Indicador</option>
                      {isLIndicator ? (
                        <option>Cargando...</option>
                      ) : (
                        Indicators.map((usuario) => (
                          <option key={usuario._id} value={usuario._id}>
                            {usuario.name}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label text-black">Descripcion</label>
                  <input
                    placeholder="Ingrese Descripcion del Indicador"
                    type="text"
                    className="max-w-full input"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Descripcion is required",
                      },
                      minLength: {
                        value: 10,
                        message: "Minimum Descripcion 10 Characters",
                      },
                      maxLength: {
                        value: 100,
                        message: "Minimum Descripcion 100 Characters",
                      },
                    })}
                  />
                  {errors.description && (
                    <span className="text-red-400">
                      {errors.description.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <button className="btn bg-orange-500 btn-block">Añadir</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

//   user_id: z
//     .string({ required_error: "User_id is Required" })
//     .uuid({ message: "Invalid User_id" })
//     .nullable(false),
//   indicators_id: z
//     .string({ required_error: "Indicators_id is Required" })
//     .uuid({ message: "Invalid Indicators_id" })
//     .nullable(false),
//   description: z
//     .string({ required_error: "Description is Required" })
//     .min(10, { message: "Minimum Description 10 Characters" })
//     .nullable(false),
//   fecha_expedited: z
//     .string({ required_error: "Fecha_Expedited is Required" })
//     .nullable(false),
