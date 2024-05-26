import { Outlet } from "react-router-dom";


function SearchContainer() {
    return (<div className="p-2 w-full">
        <Outlet></Outlet>
    </div>);
}

export default SearchContainer;