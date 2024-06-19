import { MuiButton } from "./MuiButton";
import { MuiTextField } from "./TextField";

export const overrides = (theme) => ({
  ...MuiButton(theme),
  ...MuiTextField(theme),
});
