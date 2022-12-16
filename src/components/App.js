// create your App component here
import { useEffect, useState } from "react";
const App = () => {
  const [image, setImage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://dog.ceo/api/breeds/image/random");
      const resp = await data.json();
      console.log(resp);
      setImage(resp.message);
    };
    fetchData();
  }, []);
  {
    if (!image) return <p>Loading...</p>;
  }
  return <img src={image} alt="A Random Dog" />;
};

export default App;
