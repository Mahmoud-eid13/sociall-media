import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="fi" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
}
