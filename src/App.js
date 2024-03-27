

import styles from "./App.module.css";

import MovieApp from "./MovieApp";

function App() {
  return (
    <div>
     <h1 className={styles.title}>Welcome back!</h1>
     <MovieApp/>
    </div>
  );
}

export default App;
