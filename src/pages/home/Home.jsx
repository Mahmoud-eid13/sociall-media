import { useState } from "react";
import Button from "../../components/button/Button";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import Options from "../../components/options/Options";
import { useLanguage } from "../contexts/langContext";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const { account } = useAuth();

  const openHandler = () => {
    setIsOpen(true);
    setIsOpen(!isOpen);
  };
  if (!account) {
    window.location.assign("http://localhost:3000/");
    return null;
  }
  return (
    <>
      <Topbar />

      <div className="homeContainer dark">
        <Sidebar
          isOpen={isOpen}
          openHandler={openHandler}
          setIsOpen={setIsOpen}
        />
        <Button openHandler={openHandler} />
        <Feed />
        <Rightbar />
        <div className={language === "en" ? "langOpt" : "ArLangOpt"}>
          <Options />
        </div>
      </div>
    </>
  );
}
