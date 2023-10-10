import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscribeTf = styled(TextField)(() => ({
  // 按 f12 查出 className 可以在這邊做修改
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },

  // "&:hover": {
  //   borderBottom: `1px solid ${Colors.secondary}`,
  // },
}));
