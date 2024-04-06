import Header from "./components/Header.js";
import Main from "./components/Main.js";
import "./App.css";

const posts = [
  {
    id: 1,
    postHeader:
      "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus.",
    postContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi fuga nostrum corporis nihil cumque distinctio ab qui dolores velit recusandae ducimus, quos dolorum amet autem in suscipit asperiores repellat sequi soluta. Rerum minima facere corporis quis dicta ipsa praesentium? Quam commodi ipsam in, enim libero cupiditate natus placeat suscipit animi?",
  },
  {
    id: 2,
    postHeader: "ullam fuga ad optio nemo ipsam pariatur perspiciatis",
    postContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt odit ut veniam doloribus delectus in incidunt doloremque magnam quidem ea quis, exercitationem nobis iusto itaque nam eos inventore totam modi natus nisi sunt. Expedita, id fuga! Quo, deleniti consequatur, similique iste esse est commodi quia sunt, officia pariatur fugiat.",
  },
  {
    id: 3,
    postHeader: "Expedita ipsa delectus vitae excepturi eligendi enim",
    postContent:
      "Voluptatibus numquam, fuga vel magnam praesentium qui officiis, quaerat a asperiores hic beatae nisi autem accusamus nulla nesciunt tenetur doloremque vitae consequatur!",
  },
  {
    id: 4,
    postHeader:
      "Quaerat impedit reiciendis optio illo mollitia doloribus corporis aperiam architecto enim illum vitae et omnis ea qui quo provident, esse fuga.",
    postContent:
      " A, iste! Iusto quae fuga itaque rem, harum odio et natus ratione porro. Aliquid, voluptate repellat repellendus architecto dolores tempora dolorem quis molestias error fuga adipisci atque debitis beatae provident eos id?",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      {posts.map((post) => {
        return (
          <Main
            key={post.id}
            postHeader={post.postHeader}
            postContent={post.postContent}
          />
        );
      })}
    </div>
  );
}

export default App;
