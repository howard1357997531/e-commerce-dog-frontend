import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { clamp } from "./clamp";
import { Colors } from "../../../styles/theme";

// 選擇數量按鍵
// wrapper function:
// clamp = (min, max) => (v) => {}
// 先 const clampV = clamp(1, 10);
// 使用第二層參數 setValue(clampV(value - 1))
export default function IncDec() {
    const clampV = clamp(1, 10);
    const [value, setValue] = useState(1);

    return (
      <Box display="flex">
        <IconButton
          sx={{
            borderRadius: 0,
            background: `${Colors.secondary}`,
          }}
          onClick={() => setValue(clampV(value - 1))}
          // onClick={() => setValue(clamp(1, 10)(value - 1))} // 也可以這樣寫
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            border: `1px solid ${Colors.secondary}`,
            p: 2,
          }}
        >
          {value}
        </Typography>
        <IconButton
          sx={{
            borderRadius: 0,
            background: `${Colors.secondary}`,
          }}
          onClick={() => setValue(clampV(value + 1))}
        >
          <AddIcon />
        </IconButton>
      </Box>
    );
}