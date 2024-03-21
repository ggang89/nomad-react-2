import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
  //버튼의 색깔을 주는 방법 2가지
  //1) props를 이용해서 버튼의 색깔을 주는 방법

  // return <button style={{
  //   backgroundColor:'tomato',
  //   color:"white"
  // }}>{text}</button>;
  
  //2) style을 컴포넌트화해서 import해줌
  return<button className={styles.btn}>{text}</button>;
}

Button.prototype ={
  text:PropTypes.string.isRequired,
}
export default Button;