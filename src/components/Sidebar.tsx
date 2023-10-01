"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { ChevronLeft } from "@mui/icons-material";
import { mainListItems } from "@/components/ListItems";
import main_logo from "@/assets/main_logo.png";
import Image from 'next/image'

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "#040928",
    color: "#fff",
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: [1],
        }}
      >
        <div className={`text-sm flex text-[#259FD9]  flex-col text-center`}>
          <Image src={main_logo} alt="Logo" ></Image>
        </div>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeft className="text-[#259FD9] border border-[#259FD9] rounded-full " />
        </IconButton>
      </Toolbar>
      <Divider />
      <List sx={{ padding: '10px' }} component="nav">{mainListItems}</List>
    </Drawer>
  );
};
