import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReportRequest } from "../api/Report.js";

export default function TrReport({ report, index }) {
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
      <td>{report.nombre} </td>
      <td>{report.descripcion} </td>
      <td className="flex gap-3">
        <button className="btn btn-outline-error" onClick={deleteCategoria}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}
