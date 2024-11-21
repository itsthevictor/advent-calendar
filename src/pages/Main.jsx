import { useLoaderData } from "react-router-dom";
import CalendarOne from "../components/CalendarOne";
import axios from "axios";
export const mainLoader = async () => {
  try {
    const { data } = await axios.get(
      "https://gist.githubusercontent.com/itsthevictor/263699fd6c05921359669c249fdc0424/raw/8c56f9d5451aa034e28942c277042b426238d6cb/gistfile1.json"
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
