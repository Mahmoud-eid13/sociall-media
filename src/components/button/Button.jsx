import "./button.css";
import { MoreHoriz } from "@mui/icons-material";

export default function Button({ openHandler }) {
  return (
    <div>
      <button className="active" onClick={openHandler}>
        <MoreHoriz />
      </button>
    </div>
  );
}
