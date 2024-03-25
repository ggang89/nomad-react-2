
import Button from "./Button";
import styles from "./App.module.css";
import Counter from "./Counter";
import Cleanup from "./Cleanup";
import Todo from "./Todo";

function App() {
  return (
    <div>
     <h1 className={styles.title}>Welcome back!</h1>
     <Button text={"Continue"}/>
     <Counter/>
     <Cleanup/>
     <Todo/>
    </div>
  );
}

export default App;
