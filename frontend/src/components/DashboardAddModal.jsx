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
                  <div className="form-field">
                    <label className="form-label text-black">Nombre</label>
                    <input placeholder="Type here" type="text" className="input max-w-full" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Descripción</label>
                    <div className="form-control">
                      <textarea class="textarea textarea-solid" cols='50' placeholder="Primary" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Categoria</label>
                    <input placeholder="Type here" type="text" className="input max-w-full" />
                  </div>
                  <div className='flex flex-row '>
                  <div className="form-field">
                    <label className="form-label text-black">Fecha de inicio</label>
                    <input placeholder="Type here" type="text" className="input max-w-full" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Fecha de Terminacion</label>
                    <input placeholder="Type here" type="text" className="input max-w-full" />
                  </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Formula</label>
                    <input placeholder="Type here" type="text" className="input max-w-full" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Frecuencia</label>
                    <input placeholder="Type here" type="text" className="input max-w-full" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Cumplimiento</label>
                    <input placeholder="Type here" type="text" className="input max-w-full" />
                  </div>
                  <div className="form-field">
                    <label className="form-label text-black">Area</label>
                    <input placeholder="Type here" type="text" className="input max-w-full" />
                    
                  </div>
                </div>
              </div>
            <div className="flex mt-3">
              <button className="btn btn-error btn-block">Añadir</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
