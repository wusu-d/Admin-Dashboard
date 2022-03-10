import React from "react";
import "./Topbar.css";
import wusu from "./../../assets/wusu.jpeg";
import { NotificationsNone, Settings, Language } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="logo">Wusu Admin</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone sx={{ fontSize: 30 }} />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Language sx={{ fontSize: 30 }} />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Settings sx={{ fontSize: 30 }} />
          </div>

          <img src={wusu} alt="profile" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
