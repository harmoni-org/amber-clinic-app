import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./SwipeableTemporaryDrawer.scss";

type Anchor = "top" | "left" | "bottom" | "right";

interface SwipeableTemporaryDrawerProps {
  buttonLabel: string;
  children: React.ReactElement;
}

const SwipeableTemporaryDrawer: React.FC<SwipeableTemporaryDrawerProps> = (
  props
) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const anchor = "right";

  return (
    <div key={anchor} className="appointment-area">
      <Button
        onClick={toggleDrawer(anchor, true)}
        variant="contained"
        sx={{
          position: "relative",
          zIndex: 99,

          fontWeight: 700,
          letterSpacing: ".2rem",
          height: 50,
          borderRadius: 4,
          lineHeight: 1.3,
        }}
        startIcon={<CalendarMonthIcon color="secondary" sx={{ mr: 0.5 }} />}
      >
        {props.buttonLabel}
      </Button>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        <Box
          sx={{ width: 400, padding: 2 }}
          role="presentation"
          // onClick={toggleDrawer(anchor, false)}
          // onKeyDown={toggleDrawer(anchor, false)}
        >
          {props.children}
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default SwipeableTemporaryDrawer;
