import Dashboardmap from "./Dashboardmap";
import { useAuth } from "../contexts/AuthContext";
export default function DashboardGetAll() {
  const { deleter } = useAuth();
  /* return */
  return (
    <div>
      <div className="text-center text-black mt-5">
        <h1 className="text-4xl">Panel de Indicadores</h1>
        <p className="text-xl font-thin mt-2">
          Aqui puedes visualizar los indicadores propuestos y añadidos por tu
          equipo de trabajo. Si quieres ver més detalles , dale click a uno de
          ellos para mas informacion
        </p>
      </div>
      <div className="flex flex-col overflow-x-auto">
        <div className="text-black">
          <div className="inline-block min-w-full px-8">
            <div className="overflow-x-auto">
              <table className="w-full ">
                <thead>
                  <th className="py-4">Indicador</th>
                  <th className="py-4">Descripción</th>
                  <th className="py-4">Categoria</th>
                  <th className="py-4">Fecha de Inicio</th>
                  <th className="py-4">Fecha de Terminación</th>
                  <th className="py-4">Fórmula</th>
                  <th className="py-4">Frecuencia</th>
                  <th className="py-4">Cumplimiento</th>
                  <th className="py-4">Área</th>
                  {deleter ? (
                    <th className="py-4">
                      <div className="py-4"></div>
                    </th>
                  ) : null}
                </thead>
                <tbody className="getall">
                  <Dashboardmap />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
Indicador
Descripción
Categoria
Fecha de Inicio
Fecha de Terminación 
Fórmula
Frecuencia
Cumplimiento 
Área
*/
