import React from 'react'

export default function DashboardAddModal() {
  return (
    <div>
      <input className="modal-state" id="anadir" type="checkbox" />
      <div className="modal w-screen">
        <label className="modal-overlay" htmlFor="anadir"></label>
        <div className="modal-content bg-white flex flex-col gap-5 w-11/12 md:w-3/6 lg:w-6/12 text-black">
          <label htmlFor="anadir" className="text-black  absolute right-2 top-2">✕</label>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mx-auto flex w-full  flex-col gap-6">
              <div className="form-group">
                  <h1 class="text-3xl font-semibold">Nuevo Indicador</h1>
                  <div className="form-field">
                    <label className="form-label text-black">Nombre</label>
                    <input placeholder="Type" type="text" className="max-w-full input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Descripción</label>
                    <div className="form-control w-full">
                      <textarea className=" rounded-3xl border border-slate-500  p-4 bg-white text-black" cols="70" rows="10" placeholder="Aqui la descripción" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                  <div className="form-field">
                    <label className="form-label text-black">Fecha de Inicio</label>
                    <input placeholder="Type" type="date" className="max-w-full input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Fecha de Terminacion</label>
                    <input placeholder="Type" type="date" className="max-w-full input" />
                  </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Formula</label>
                    <input placeholder="Type" type="text" className="max-w-full input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Frecuencia</label>
                    <input placeholder="Type" type="text" className="max-w-full input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Cumplimiento</label>
                    <input placeholder="Type" type="text" className="max-w-full input" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Area</label>
                    <input placeholder="Type" type="text" className="max-w-full input" />
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
  )
}
