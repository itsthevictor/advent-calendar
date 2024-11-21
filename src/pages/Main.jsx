import { useLoaderData } from "react-router-dom";
import CalendarOne from "../components/CalendarOne";
import axios from "axios";
export const mainLoader = async () => {
  try {
    const { data } = await axios.get(
      "https://gist.githubusercontent.com/itsthevictor/263699fd6c05921359669c249fdc0424/raw/e6aefa02d1ee94a3e8af4fd12d4ce132fef7a583/gistfile1.json"
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Main = () => {
  const data = useLoaderData();

  return (
    <div>
      <CalendarOne doors={data} />
    </div>
  );
};
export default Main;
