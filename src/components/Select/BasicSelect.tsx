import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import moment from "moment";

const LAF: string[] = ["LT", "LTS", "L", "LL", "LLL", "LLLL"]; // Locale aware formats
export default function BasicSelect() {
  const [lAFValue, setLAFValue] = React.useState<string>("LLLL");
  const [parseString, setParseString] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setLAFValue(event.target.value as string);
  };

  React.useEffect(() => {
    console.log('parse day ', moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss", true))
    setParseString(moment('24/12/2019 09:15:00', "DD/MM/YYYY hh:mm:ss", true).format(lAFValue));
  }, [lAFValue]);

  return (
    <div className="mt-2 p-4">
      <p className="text-bold text-xl">Choose your LAF to see the day after parse</p>
      <p className="text-slate-700">moment('24/12/2019 09:15:00', "DD/MM/YYYY hh:mm:ss", true).format(lAFValue)</p>
      <div className="flex justify-center gap-x-4 mt-2">
        <Box sx={{ minWidth: 120, minHeight: '80px' }}>
          <FormControl fullWidth sx={{minHeight: '100%'}}>
            <InputLabel id="demo-simple-select-label">LAF</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lAFValue}
              label="LAF"
              onChange={handleChange}
            >
              {LAF.map((laf_item: string, index) => (
                <MenuItem key={index} value={laf_item}>
                  {laf_item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div className="flex justify-center items-center flex-1 h-20 bg-slate-100">
          <p>Parse day:  {parseString}</p>
        </div>
      </div>
    </div>
  );
}
