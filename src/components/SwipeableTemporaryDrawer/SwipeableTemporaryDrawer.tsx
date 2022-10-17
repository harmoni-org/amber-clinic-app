import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import "./SwipeableTemporaryDrawer.scss";

type Anchor = "top" | "left" | "bottom" | "right";

interface SwipeableTemporaryDrawerProps {
  buttonLabel: string;
  children: React.ReactElement;
  onClose: () => void;
  onOpen: () => void;
  showDrawer?: boolean;
  anchor: Anchor
}


const SwipeableTemporaryDrawer: React.FC<SwipeableTemporaryDrawerProps> = (
  props
) => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const anchor = props.anchor;

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

      if (props.showDrawer === undefined) {
        setShowDrawer(open);
      }

      if (open) {
        props.onOpen();
      } else {
        props.onClose();
      }
    };

  return (
    <div className="appointment-area">
      <Button
        onClick={toggleDrawer(anchor, true)}
        variant="contained"
        sx={{ position: "relative", zIndex: 99 }}
      >
        {props.buttonLabel}
      </Button>
      <SwipeableDrawer
        anchor={anchor}
        // open={state[anchor]}
        open={props.showDrawer !== undefined ? props.showDrawer : showDrawer}
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