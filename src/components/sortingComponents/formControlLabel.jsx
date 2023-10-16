import React from "react";
import { FormControlLabel, FormGroup } from "@mui/material";
import Switch from "@mui/material/Switch";

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.onDoubleChange(event.target.checked);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedA}
            color="secondary"
            onChange={handleChange}
            name="checkedA"
            className="ml-4"
          />
        }
        label="Duo"
        disabled={props.disable}
      />
    </FormGroup>
  );
}
