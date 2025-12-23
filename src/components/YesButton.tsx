import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./HeartButton.css";
import { useSetRecoilState } from "recoil";
import { snackbarState } from "./recoilValues";

function YesButton() {
  const setSnackbarOpen = useSetRecoilState(snackbarState);
  const handleClick = () => {
    setSnackbarOpen(true);
  };

  return (
    <>
      <Link to="/schedule-date">
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ padding: "15px 30px", fontSize: "18px", fontWeight: "bold" }}
          className="heart-button"
          onClick={handleClick}>
          Yes, I Do! 💖
        </Button>
      </Link>
    </>
  );
}

export default YesButton;
