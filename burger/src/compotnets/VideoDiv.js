import VideoBG from "./hamburgers-video.mp4";
import classes from "./VideoDiv.module.css";
function VideoDiv() {
  return (
    <>
      <div className={classes.videoDiv}>
        <video className={classes.videoBg} src={VideoBG} autoPlay loop muted />
        <div className={classes.sloganDiv}>
          <p>
            Build Your Burger
            <br />
            Your Way!
          </p>
        </div>
        <div className={classes.content}>
          <p>Click Me</p>
        </div>
      </div>
    </>
  );
}
export default VideoDiv;
