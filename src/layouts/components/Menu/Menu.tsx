import { Button } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import routes from "@/config/routes";
function Menu() {
    return ( <div className="flex items-center">
        <Link to={routes.newEmail}>
            <Button variant="outlined" startIcon={<MailIcon></MailIcon>}>
                New Email
            </Button>
        </Link>
    </div>
     );
}

export default Menu;