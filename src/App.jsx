//to utilize the useState hook feature of react
import { useState } from "react";
// import the data from the data.js file
import { puppyList } from "./data.js";

function App() {
  //
  const [puppies, setPuppies] = useState(puppyList);
  //
  const [featPupId, setFeatPupId] = useState(null);

  console.log(puppies);
  const featuredPup = puppies.find((pup) => {
    return pup.id === featPupId;
  });
  console.log(featuredPup);
  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>{featuredPup.age}</li>
            <li>{featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
