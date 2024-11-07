import { useAuth } from "../../pages/contexts/AuthContext";
import { useTheme } from "../../pages/contexts/ThemeContext";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  const { account } = useAuth();
  const { theme } = useTheme();

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={account.profilePicture}
            alt="ps"
            className="shareProfileImg"
          />
          <input
            placeholder="what's on your mind mahmoud ?"
            className={theme === "light" ? "shareInput" : "shareInput dark"}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareOptionIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareOptionIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareOptionIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
