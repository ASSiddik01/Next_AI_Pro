"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { ChevronRight } from "@mui/icons-material";
import { Sidebar } from "@/components/Sidebar";
import moment from "moment";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // time and date
  const date = moment().format("dddd, Do MMM YYYY");
  let time = moment().format("h:mm:ss A");

  const [cTime, setCTime] = React.useState("");
  const updateTime = () => {
    time = moment().format("h:mm:ss A");
    setCTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar style={{ background: "#090E30" }} position="absolute" open={open}>
        <Toolbar
          style={{ padding: "0px 20px" }}
          sx={{
            pr: "10px", // keep right padding when drawer closed
          }}
        >
          <Typography
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <Image width={35} src={logo} alt="Logo"></Image>
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <ChevronRight className="text-[#259FD9] border border-[#259FD9] rounded-full" />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <div
              className={`text-sm flex text-[#259FD9]  flex-col text-center`}
            >
              <span> {date} </span>
              <span> {cTime} </span>
            </div>
          </Typography>
          <IconButton color="inherit">
            <UserButton afterSignOutUrl="/" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} setOpen={setOpen} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container
          style={{ padding: "15px" }}
          className="bg-[#0d1441]"
          maxWidth="xl"
        >
          <div
            style={{ height: `calc(100vh - 94px)` }}
            className="bg-[#040928] rounded-lg p-4"
          >
            {children}
          </div>
        </Container>
      </Box>
    </Box>
  );
}
