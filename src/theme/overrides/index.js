import { MuiButton } from "./MuiButton";
import { MuiContainer } from "./MuiContainer";
import { MuiTextField } from "./TextField";

export const overrides = (theme) => ({
  ...MuiButton(theme),
  ...MuiTextField(theme),
  ...MuiContainer(theme),
});
