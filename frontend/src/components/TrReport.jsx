import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReportRequest } from "../api/Report.js";
import {useAuth} from "../contexts/AuthContext";

export default function TrReport({ report, index }) {
  const { deleter } = useAuth();
  const queryClient = useQueryClient();

  const deleteReportsMutate = useMutation({
    mutationFn: deleteReportRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("reports");
    },
  });

  const deleteCategoria = () => {
    deleteReportsMutate.mutate(report._id);
  };

  return (
    <tr>
      <th># {index + 1}</th>
      <td>{report.idIndicators} </td>
      <td>{report.idPersona} </td>
      <td>{report.description} </td>
      <td>{report.fecha} </td>
      {deleter?(<td className="flex gap-3">
        <button className="btn btn-outline-error" onClick={deleteCategoria}>
          Eliminar
        </button>
      </td>):(null)}
    </tr>
  );
}

/*
{
  "idIndicators":"65237671b0f0b07936f50609",
  "idPersona":"6525507c635253283592eec5",
  "description":"descripcion",
  "fecha":"2022-11-06"
}
*/