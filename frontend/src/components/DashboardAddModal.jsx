import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { postIndicatorsRequest } from "../api/indicators.js";

export default function DashboardAddModal() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addIndicatorsMutation = useMutation({
    mutationFn: postIndicatorsRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("indicators");
    },
  });

  const onSubmit = handleSubmit((data) => {
    const { completation } = data;
    data.completation = parseInt(completation);
    addIndicatorsMutation.mutate(data);
    reset();
  });

  return (
    <div>
      <input className="modal-state" id="anadir" type="checkbox" />
      <div className="modal w-screen">
        <label className="modal-overlay" htmlFor="anadir"></label>
        <div className="modal-content bg-white flex flex-col gap-5 w-11/12 md:w-3/6 lg:w-6/12 text-black">
          <label
            htmlFor="anadir"
            className="text-black  absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={onSubmit}>
            <div className="mx-auto flex w-full  flex-col gap-6">
              <div className="form-group">
                <h1 class="text-3xl font-semibold">Nuevo Indicador</h1>
                <div className="form-field">
                  <label className="form-label text-black">Nombre</label>
                  <input
                    placeholder="Ingrese Nombre del Indicador"
                    type="text"
                    className="max-w-full input"
                    {...register("name", {
                      required: { value: true, message: "Nombre is required" },
                      minLength: {
                        value: 1,
                        message: "Minimum Nombre 1 Characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <span className="text-red-400">{errors.name.message} </span>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label text-black">Descripción</label>
                  <div className="form-control w-full flex flex-col">
                    <textarea
                      className=" rounded-3xl border border-slate-500  p-4 bg-white text-black"
                      cols="70"
                      rows="10"
                      placeholder="Escriba la Descripción del Indicador"
                      {...register("description", {
                        required: {
                          value: true,
                          message: "Descripción is required",
                        },
                        minLength: {
                          value: 10,
                          message: "Minimum Descripción 10 Characters",
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
                <div className="form-field">
                  <label className="form-label text-black">Categoría</label>
                  <div className="form-control w-full flex flex-col">
                    <input
                      type="text"
                      className="max-w-full input"
                      placeholder="Escriba la Categoría del Indicador"
                      {...register("category", {
                        required: {
                          value: true,
                          message: "Categoría is required",
                        },
                        minLength: {
                          value: 4,
                          message: "Minimum Categoría 10 Characters",
                        },
                      })}
                    />
                    {errors.category && (
                      <span className="text-red-400">
                        {errors.category.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="form-field">
                    <label className="form-label text-black">
                      Fecha de Inicio
                    </label>
                    <input
                      placeholder="Type"
                      type="date"
                      className="max-w-full input"
                      {...register("fecha_init", {
                        required: {
                          value: true,
                          message: "Fecha Inicio is required",
                        },
                      })}
                    />
                    {errors.fecha_init && (
                      <span className="text-red-400">
                        {errors.fecha_init.message}
                      </span>
                    )}
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">
                      Fecha de Terminacion
                    </label>
                    <input
                      placeholder="Type"
                      type="date"
                      className="max-w-full input"
                      {...register("fecha_end", {
                        required: {
                          value: true,
                          message: "Fehca Terminacion is required",
                        },
                      })}
                    />
                    {errors.fecha_end && (
                      <span className="text-red-400">
                        {errors.fecha_end.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label text-black">Formula</label>
                  <input
                    placeholder="Ingrese Formula del Indicador"
                    type="text"
                    className="max-w-full input"
                    {...register("formula", {
                      required: {
                        value: true,
                        message: "Formula is required",
                      },
                      minLength: {
                        value: 1,
                        message: "Minimum Formula 1 Characters",
                      },
                    })}
                  />
                  {errors.formula && (
                    <span className="text-red-400">
                      {errors.formula.message}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label text-black">Frecuencia</label>
                  <input
                    placeholder="Ingrese Frecuencia del Indicador"
                    type="text"
                    className="max-w-full input"
                    {...register("frecuency", {
                      required: {
                        value: true,
                        message: "Frecuencia is required",
                      },
                      minLength: {
                        value: 1,
                        message: "Minimum Frecuencia 1 Characters",
                      },
                    })}
                  />
                  {errors.frecuency && (
                    <span className="text-red-400">
                      {errors.frecuency.message}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label text-black">Cumplimiento</label>
                  <input
                    placeholder="Ingrese Cumplimiento del Indicador"
                    type="number"
                    className="max-w-full input"
                    {...register("completation", {
                      required: {
                        value: true,
                        message: "Cumplimiento is required",
                      },
                      minLength: {
                        value: 0,
                        message: "Minimum Cumplimiento 0 Characters",
                      },
                      maxLength: {
                        value: 100,
                        message: "Minimum Cumplimiento 100 Characters",
                      },
                    })}
                  />
                  {errors.completation && (
                    <span className="text-red-400">
                      {errors.completation.message}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label text-black">Area</label>
                  <input
                    placeholder="Ingrese Area del Indicador"
                    type="text"
                    className="max-w-full input"
                    {...register("area", {
                      required: { value: true, message: "Area is required" },
                      minLength: {
                        value: 10,
                        message: "Minimum Area 10 Characters",
                      },
                    })}
                  />
                  {errors.area && (
                    <span className="text-red-400">{errors.area.message}</span>
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
