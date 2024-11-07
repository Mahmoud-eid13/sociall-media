import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

import { useAuth } from "../contexts/AuthContext";
import Options from "../../components/options/Options";
import { useLanguage } from "../contexts/langContext";
import { Locales } from "../../locales";

export default function Profile() {
  const { account } = useAuth();
  const { language } = useLanguage();

  if (!account) {
    window.location.assign("http://localhost:3000/");
    return null;
  }

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="ProfileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={account.cover} alt="ci" className="profileCoverImg" />
              <img
                src={account.profilePicture}
                alt="ci"
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileName">{account.username}</h4>
              <span className="profileDesc">{Locales[language]?.welcome}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
        <div className={language === "en" ? "plangOpt" : "pArLangOpt"}>
          <Options />
        </div>
      </div>
    </>
  );
}
