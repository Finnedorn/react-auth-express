import { useAuth } from "../../contexts/AuthContext";
const Home = () => {
  const { userData, isLogged } = useAuth();

  return (
    <>
      {isLogged === true ? (
        <div className=" d-flex display-1 justify-content-center text-light">
          <h1>Benvenutə! {userData.name} </h1>
        </div>
      ) : (
        <div className=" d-flex display-1 justify-content-center text-light">
          <h1>Questa è la Home !</h1>
        </div>
      )}
    </>
  );
};

export default Home;
