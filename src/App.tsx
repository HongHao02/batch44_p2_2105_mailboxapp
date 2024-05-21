import "./App.css";
import EmailDasboard from "./components/Lodash/Lodash";
import SearchMail from "./components/Lodash/SearchMail";
import BasicSelect from "./components/Select/BasicSelect";

function App() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-10 bg-green-500 ">
          Batch44 Moment Demo
        </div>

        <BasicSelect></BasicSelect>
        <SearchMail></SearchMail>
        <EmailDasboard></EmailDasboard>
      </div>
    </>
  );
}

export default App;
