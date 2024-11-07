import { Link } from "react-router-dom";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import DarkMode from "../DarkMode/DarkMode";
import { useAuth } from "../../pages/contexts/AuthContext";
import { useTheme } from "../../pages/contexts/ThemeContext";

export default function Topbar() {
  const { theme } = useTheme();
  const { account } = useAuth();
  console.log(account);

  return (
    <div
      className={theme === "light" ? "topbarContainer" : "topbarContainer dark"}
    >
      <div className="topbarLeft">
        <span className={theme === "light" ? "logo" : "logo dark"}>
          Moosocial
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for a friend, posts and videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to={"/profile"} className="topbarLink">
            ProfilePage
          </Link>
          <Link to={"/home"} className="topbarLink">
            Timeline
          </Link>
        </div>
        <div className="topbarIcons">
          <div
            className={
              theme === "light" ? "topbarIconItem" : "topbarIconItem dark"
            }
          >
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div
            className={
              theme === "light" ? "topbarIconItem" : "topbarIconItem dark"
            }
          >
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div
            className={
              theme === "light" ? "topbarIconItem" : "topbarIconItem dark"
            }
          >
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <img src={account?.profilePicture} alt="pp" className="topbarImg" />
        <DarkMode />
      </div>
    </div>
  );
}
