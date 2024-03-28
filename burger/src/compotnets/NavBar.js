import classes from "./NavBar.module.css";
import logo from "./logo.png";
import shop from "./shop.png";
import currency from "./currency.png";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.leftNavBar}>
        <div className={classes.imgDiv}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </div>
        <div className={classes.onlineorderbutton}>
          <p>Online Order</p>
        </div>
        <div className={classes.aboutbutton}>
          <p>About</p>
        </div>
        <div className={classes.imgDiv}>
          <img src={shop} alt="shop" className={classes.shop} />
        </div>
      </div>
      <div className={classes.rightNavBar}>
        <div className={classes.imgDiv}>
          <img src={currency} alt="currency" className={classes.shop} />
        </div>
        <div className={classes.stafftbutton}>
          <p>Staff Login</p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
