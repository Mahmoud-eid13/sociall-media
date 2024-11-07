import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useAuth } from "../../pages/contexts/AuthContext";
import { useLanguage } from "../../pages/contexts/langContext";

export default function Rightbar({ profile }) {
  const { logout } = useAuth();
  const { language } = useLanguage();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="bi" className="birthdayImg" />
          <span className="birthdayText">
            <b>pola foster</b> and <b>3 others</b> have a birthday today .
          </span>
        </div>
        <img src="/assets/ad.png" alt="ai" className="rightsideAd" />
        <button
          onClick={handleLogout}
          className={language === "en" ? "logOut" : "arLogout"}
        >
          Logout
        </button>

        <ul
          className={
            language === "en" ? "rightbarFriendList" : "arRightbarFrriendList"
          }
        >
          <h4 className="rightbarTitle">Online Friends</h4>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User informations</h4>
        <div className="rightbarInfo">
          <div className="rightbarbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Giza</span>
          </div>
          <div className="rightbarbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Cairo</span>
          </div>
          <div className="rightbarbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/person/2.jpeg"
              alt="ff"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John kelce</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/3.jpeg"
              alt="ff"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John kelce</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/4.jpeg"
              alt="ff"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John kelce</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/5.jpeg"
              alt="ff"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John kelce</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/6.jpeg"
              alt="ff"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John kelce</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/person/7.jpeg"
              alt="ff"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John kelce</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
