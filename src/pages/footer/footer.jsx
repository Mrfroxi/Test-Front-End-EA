import classes from './footer.module.css'
import { ReactComponent as ArrowRightSvg } from "../../shared/ui/svg/arrow-rightSvg.svg";
import { sendData } from "../../action/mainAction";
import { useInput } from "../../shared/hoc/useInput";


const Footer =  (props) => {


    const email = useInput("", { isEmpty: true, minLength: 4, isEmail: true });

 return (
    <section className={classes.mainFooter}>
    <div className={classes.notifiedBlock}>
      <form className={classes.notifiedBlockForm}>
        {email.isDirty && email.isEmpty && "write something"}
        {email.isDirty && email.minLengthError && "write something2"}
        {email.isDirty && email.isEmailError && "write something3"}
        <input
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          value={email.value}
          type="text"
          placeholder="Enter your Email and get notified"
          className={classes.notifiedBlockFormInput}
        />
        <button
          type="submit"
          onClick={(e) => sendData(e, email)}
          className={classes.notifiedBlockFormBtn}
        >
          <ArrowRightSvg />
        </button>
      </form>
      <div
        onClick={(e) => props.onClick(e)}
        className={classes.linkRefMainFooter}
      >
        <a href="./" className={classes.link}>
          Other Events
        </a>
      </div>
    </div>
  </section>
 );
};

export default Footer;