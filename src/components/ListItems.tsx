import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ChatBubbleOutline, Code, Dashboard, OndemandVideo, PhotoCameraBack, QueueMusic, Settings } from '@mui/icons-material';
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <Link href={`/dashboard`}>
      <ListItemButton sx={{
        padding: {
          xs: "8px",
          md: "8px 16px",
        }
      }} style={{ borderBottom: "1px solid #259FD9" }}>
        <ListItemIcon>
          <Dashboard className="text-[#259FD9]" />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ fontSize: '15px' }} primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link href={`/text`}>
      <ListItemButton sx={{
        padding: {
          xs: "8px",
          md: "8px 16px",
        }
      }} style={{ borderBottom: "1px solid #259FD9" }}>
        <ListItemIcon>
          <ChatBubbleOutline className="text-[#259FD9]" />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ fontSize: '15px' }} primary="Text Generation" />
      </ListItemButton>
    </Link>
    <Link href={`/code`}>
      <ListItemButton sx={{
        padding: {
          xs: "8px",
          md: "8px 16px",
        }
      }} style={{ borderBottom: "1px solid #259FD9" }}>
        <ListItemIcon>
          <Code className="text-[#259FD9]" />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ fontSize: '15px' }} primary="Code Generation" />
      </ListItemButton>
    </Link>
    <Link href={`/image`}>
      <ListItemButton sx={{
        padding: {
          xs: "8px",
          md: "8px 16px",
        }
      }} style={{ borderBottom: "1px solid #259FD9" }}>
        <ListItemIcon>
          <PhotoCameraBack className="text-[#259FD9]" />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ fontSize: '15px' }} primary="Image Generation" />
      </ListItemButton>
    </Link>
    <Link href={`/video`}>
      <ListItemButton sx={{
        padding: {
          xs: "8px",
          md: "8px 16px",
        }
      }} style={{ borderBottom: "1px solid #259FD9" }}>
        <ListItemIcon>
          <OndemandVideo className="text-[#259FD9]" />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ fontSize: '15px' }} primary="Video Generation" />
      </ListItemButton>
    </Link>
    <Link href={`/music`}>
      <ListItemButton sx={{
        padding: {
          xs: "8px",
          md: "8px 16px",
        }
      }} style={{ borderBottom: "1px solid #259FD9" }}>
        <ListItemIcon>
          <QueueMusic className="text-[#259FD9]" />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ fontSize: '15px' }} primary="Music Generation" />
      </ListItemButton>
    </Link>
    <Link href={`/setting`}>
      <ListItemButton sx={{
        padding: {
          xs: "8px",
          md: "8px 16px",
        }
      }} style={{ borderBottom: "1px solid #259FD9" }}>
        <ListItemIcon>
          <Settings className="text-[#259FD9]" />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ fontSize: '15px' }} primary="Settings" />
      </ListItemButton>
    </Link>

  </React.Fragment>
);
