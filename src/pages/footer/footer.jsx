import classes from "./footer.module.css";
import { ReactComponent as ArrowRightSvg } from "../../shared/ui/svg/arrow-rightSvg.svg";
import { sendData } from "../../action/mainAction";
import { useInput } from "../../shared/hoc/useInput";
import ErrorText from "../../shared/errorInputText/errorInputText";

const Footer = ({ onClick, setModal }) => {
  
  const email = useInput("", { isEmpty: true, minLength: 4, isEmail: true });


  return (
    <section className={classes.mainFooter}>
      <div className={classes.notifiedBlock}>
        <form className={classes.notifiedBlockForm}>

          {email.isDirty && !email.isInputValid && <ErrorText text='Email is empty or invalid'/>}

          <input
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
            value={email.value}
            type="text"
            placeholder="Enter your Email and get notified"
            className={classes.notifiedBlockFormInput}
          />

          <button
            disabled={!email.isInputValid}
            type="submit"
            onClick={(e) => sendData(e, email, setModal)}
            className={classes.notifiedBlockFormBtn}
          >
            <ArrowRightSvg />
          </button>
        </form>

        <div onClick={(e) => onClick(e)} className={classes.linkRefMainFooter}>
          <a href="./" className={classes.link}>
            Other Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
