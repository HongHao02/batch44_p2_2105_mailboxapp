import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Search from "../Search/CustomSearch";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Email } from "@/types/EmailType";
import { EmailItem } from "./EmailDasboard";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchMail() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const { s_emails, s_state } = useSelector(
    (state: RootState) => state.emailSearchStore
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant="contained" onClick={handleClickOpen}>
        Search Mail
      </Button> */}
      <SearchIcon onClick={handleClickOpen}></SearchIcon>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Search Mail
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Exit
            </Button>
          </Toolbar>
        </AppBar>
        <div className="flex justify-center items-center min-h-20 max-h-40">
          <Search></Search>
        </div>
        <List>
          {/* <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton> */}
          {s_emails.length > 0 ? (
            s_emails.map((email: Email, index) => (

              <div key={index} onClick={() => {
                navigate(`/mail-box/content/:${email.id}`)
                setOpen(false)
              }}>
                <ListItemButton>
                  <EmailItem type="inbox" email={email}></EmailItem>
                </ListItemButton>
                <Divider />
              </div>

            ))
          ) : (
            <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
              <div>{s_state || "No email match this search value"}</div>
            </ListItemButton>
          )}
        </List>
      </Dialog>
    </React.Fragment>
  );
}
