import { useState, useEffect } from "react";
//useEffect : 2개의 argument를 가진다
//첫번째 인자는 우리가 딱 한번만 실행하고 싶은 코드다
function Counter() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("All the time render");
  useEffect(() => {
    //useEffect를 사용하면 렌더링 호출을 조정할 수 있다
    console.log("I run only once.");
  }, []);
  // 1번만 호출된다=> react가 지켜볼 게 없으니까
  useEffect(() => {
    if(keyword !=="" && keyword.length >5){
      console.log("SEARCH FOR",keyword);
    }
  },[keyword]);
  //keyword가 변화할 때 코드를 실행한다

  useEffect(() =>{
    console.log("when 'counter' changed.")
  },[counter])

  useEffect(() =>{
    console.log("when change counter & keyword")
  },[counter,keyword])
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default Counter;
