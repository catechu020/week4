// function User({name}) {
//   return <h2>안녕하세요 {name}님</h2>;
// }

// function Hello(){
//   return <h1>안녕하세요 React</h1>;
// }

// function Product({name, price}){
//   return (
//     <div>
//       <h3>상품: {name}</h3>
//       <p>가격: {price}</p>
//     </div>
//   )
// }

// function ProfileCard ({name, age, job}){
//   return (
//     <div>
//       <h2>이름: {name}</h2>
//       <h3>나이: {age}</h3>
//       <p>직업: {job}</p>
//     </div>
//   )
// }

// function Button({text}){
//   return <button>{text}</button>;
// }

// function Box({children}){
//   return <div> {children} </div>;
// }

// function FruitList({fruits}) {
//   return(
//     <ul>
//       {fruits.map((fruit, index) => (
//         <li key = {index}>{fruit}</li>
//       ))}
//     </ul>
//   )
// }

// function App(){
//   const fruits = ["사과", "바나나", "포도"];
//   return(
//     <div>
//       <h1>4주차 실습</h1>
//       <hr />

//       <h2>실습1</h2>
//       <Hello />
//       <hr />

//       <h2>실습2</h2>
//       <User name = "길동1" />
//       <User name = "길동2" />
//       <User name = "길동3" />
//       <User name = "길동4" />
//       <User name = "길동5" />
//       <hr />

//       <h2>실습3</h2>
//       <Product name="노트북" price="100" />
//       <Product name="키보드" price="10" />
//       <Product name="마우스" price="5" />
//       <hr />

//       <h2>실습4</h2>
//       <ProfileCard name="김민지" age="20" job="학생" />
//       <hr />

//       <h2>실습5</h2>
//       <Button text="로그인" /><br/>
//       <Button text="회원가입" /><br/>
//       <Button text="삭제" />
//       <hr />
      
//       <h2>실습6</h2>
//       <Box>
//         <h1>안녕하세요</h1>
//         <h2>안녕하세요!!</h2>
//       </Box>
//       <hr />

//       <h2>실습7</h2>
//       <FruitList fruits={fruits}/>
//     </div>
//   );
// }

// export default App;

function Book(props){
  return (
    <div>
      <h2>이 책의 제목은 {props.title} 입니다.</h2>
      <p>이 책의 저자는 {props.author}님 입니다.</p>
      <p>이 책은 {props.price}원 입니다.</p>
    </div>
  );
}

function Message(props){
  return (
    <div>
      <h3>{props.name}님께</h3>
      <p>{props.message}</p>
    </div>
  )
}

function Button({text, color}){
  return (
    <button style={{backgroundColor: color, color: "white"}}>
      {text}
    </button>
  )
}

function VideoCard({title, channel, views}){
  return (
    <div>
      <h3>{title}</h3>
      <p>{channel}</p>
      <p>조회수: {views}</p>
    </div>
  );
}

function VideoList({videos}){
  return (
    <div>
      {videos.map((video, index) => (
        <VideoCard 
          key={index}
          title={video.title}
          channel={video.channel}
          views={video.views}
        />

      ))}
    </div>
  )
}

function App(){
  const video = [
    {
      title: "리액트 기초 강의",
      channel: "코딩채널",
      views: "10만"
    },
    {
      title: "자바스크립트 완벽 정리",
      channel: "개발자TV",
      views: "25만"
    }
  ];
  return (
    <div>
      <h1>4주차 수업 과제 1</h1>
      <hr />

      <Book tile="어린왕자" author="생텍쥐페리" price="15000"/>
      <Book tile="파이썬" author="홍길동" price="20000"/>
      <Book tile="데이터베이스" author="김길동" price="25000"/>
      <hr />

      <h1>4주차 수업 과제2</h1>
      <Message name="영희" message="생일축하해!"/>
      <Message name="철수" message="좋은하루보내!"/>
      <Message name="영덕" message="대게"/>
      <hr />

      <h1>4주차 수업 과제3</h1>
      <h2>실습5</h2>
       <Button text="로그인" color="blue"/><br/>
       <Button text="회원가입" color="green"/><br/>
       <Button text="삭제" color="red"/>
       <hr />
      
      <h1>4주차 실습 과제4</h1>
      <h1>📺 추천 영상</h1>
      <VideoList videos={video} />
    </div>
  )
}

export default App;