import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from '@mui/icons-material/Search';
import _ from "lodash";
import { Email } from "@/types/EmailType";
import {
  addSearchContent,
  addSearchResults,
  setSearchResultState,
} from "@/features/searchMailStore/emailSearchSlice";

import { Link } from "react-router-dom";

export default function CustomSearch() {
  const dispatch: AppDispatch = useDispatch();
  const { emails } = useSelector((state: RootState) => state.emailStore);
  const { s_content } = useSelector(
    (state: RootState) => state.emailSearchStore
  );
  const [search, setSearch] = useState(s_content.length != 0 ? s_content : "");

  const handleSearchEmail = () => {
    console.log("search_value ", search);
    const searchValue = search.trim();
    dispatch(addSearchContent(searchValue));
    if (searchValue.length != 0) {
      const results = _.filter(
        emails,
        (email: Email) =>
          email.content.includes(search) || email.subject.includes(search)
      );
      dispatch(addSearchResults(results));
      console.log("search_result ", results);
    } else {
      dispatch(setSearchResultState("Error: Empty search value"));
    }
  };
  //   const handleEnterKeyDown = (e : KeyboardEventHandler) => {
  //         console.log("keydow ", e)
  //   };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 600 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Link to={`/mail-box/search/:${search}`}>
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleSearchEmail}
        >
          <SearchIcon></SearchIcon>
        </IconButton>
      </Link>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Email"
        inputProps={{ "aria-label": "search google maps" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      // onKeyDown={handleEnterKeyDown}
      />
      <IconButton onClick={() => setSearch("")}>
        <ClearIcon></ClearIcon>
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
