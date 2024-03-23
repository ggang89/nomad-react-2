
import Button from "./Button";
import styles from "./App.module.css";
import Counter from "./Counter";

function App() {
  return (
    <div>
     <h1 className={styles.title}>Welcome back!</h1>
     <Button text={"Continue"}/>
     <Counter/>
    </div>
  );
}

export default App;
