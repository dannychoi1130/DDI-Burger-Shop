import VideoBG from "./burgerVideo .mp4";
import classes from "./VideoDiv.module.css";
import { Link } from "react-router-dom";
function VideoDiv({ tabletSize }) {
  return (
    <>
      <div className={classes.videoDiv}>
        <video className={classes.videoBg} src={VideoBG} autoPlay loop muted />
        <div className={classes.contextDiv}>
          <div className={classes.sloganDiv}>
            <p className={classes.bigTitle}>
              Build Your Burger
              <br />
              Your Way!
            </p>
          </div>
          {!tabletSize && (
            <div className={classes.descriptionDiv}>
              <p className={classes.description}>
                Embark on a culinary adventure where the only limit is your
                imagination. <br /> Get ready to indulge in the burger of your
                dreams.
              </p>
            </div>
          )}
          <Link to="/BurgerCm">
            <button className={classes.orderBtn}> Click me to start !!</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default VideoDiv;
