import { useState, useEffect } from "react";

function Hello() {
  function byFn(){
    console.log("bye:(");
  }
  function hiFn(){
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn,[]);
  return <h1>Hello</h1>;
}
//component는 jsx를 부르는 function이다
function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      {/* 자바스크립트를 쓸 때 중괄호를 써준다 */}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}
export default Cleanup;
