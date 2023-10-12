import { useQuery } from "@tanstack/react-query";
import { getReportsRequest } from "../api/Report.js";
import TrReport from "./TrReport.jsx";

export default function BodyReports() {
  const {
    isLoading,
    isError,
    data: Reports,
    error,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: getReportsRequest,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <tbody>
      {Reports.map((report, index) => (
        <TrReport report={report} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
