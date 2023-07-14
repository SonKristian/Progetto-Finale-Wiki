import { useState } from "react";
import "./css/register.css";

const CreateHero = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [eyecol, setEyecol] = useState("");
  const [haircol, setHaircol] = useState("");
  const [herostatus, setHerostatus] = useState(false);

  const handleCreation = async (e) => {
    e.preventDefault();
    const storedToken = sessionStorage.getItem("jwtToken");
    const storedName = sessionStorage.getItem("user");

    const userData = {
      name: name,
      gender: gender,
      race: race,
      height: height,
      weight: weight,
      eyecol: eyecol,
      haircol: haircol,
    };

    try {
      const response = await fetch("http://localhost:3000/newhero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Berear ${storedToken}`,
          user: storedName,
        },
        body: JSON.stringify(userData),
      });

      if (response) {
        console.log(response.body);
        setHerostatus("Hero creation : successful");
        // Clear form inputs
      } else {
        setHerostatus("Hero creation : failed");
      }
    } catch (error) {
      setHerostatus("Error occurred during creation");
      console.error(error);
      window.location.href = "/notfound"
    }
  };

  return (
    <div className="flex justify-center items-center mb-[5rem] mt-[4rem]">
      {!herostatus ? (
        <div className="form-ctn">
          <form onSubmit={handleCreation}>
            <div className="flex flex-col justify-center">
              <div className="mt-[1.5rem] flex flex-col justify-center items-center">
                <h1>Creation of your hero</h1>
                <p>
                  Please fill in this form to create your personal superhero.
                </p>
              </div>

              <label className="mt-[1.5rem]" htmlFor="name">
                <b>Name</b>
              </label>
              <input
                type="text"
                placeholder="     Enter Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label className="mt-[1.5rem]" htmlFor="gender">
                <b>Gender</b>
              </label>
              <input
                type="text"
                placeholder="     Enter Gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />

              <label className="mt-[1.5rem]" htmlFor="race">
                <b>Race</b>
              </label>
              <input
                type="race"
                placeholder="     Enter Race"
                name="race"
                value={race}
                onChange={(e) => setRace(e.target.value)}
                required
              />

              <label className="mt-[1.5rem]" htmlFor="height">
                <b>Height</b>
              </label>
              <input
                type="height"
                placeholder="     Enter Height (cm)"
                name="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />

              <label className="mt-[1.5rem]" htmlFor="weight">
                <b>Weight</b>
              </label>
              <input
                type="weight"
                placeholder="     Enter Weight (Kg)"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />

              <label className="mt-[1.5rem]" htmlFor="eyecol">
                <b>Eye Color</b>
              </label>
              <input
                type="eyecol"
                placeholder="     Enter Eye Color"
                name="eyecol"
                value={eyecol}
                onChange={(e) => setEyecol(e.target.value)}
                required
              />

              <label className="mt-[1.5rem]" htmlFor="haircol">
                <b>Hair Color</b>
              </label>
              <input
                type="haircol"
                placeholder="     Enter Hair Color"
                name="haircol"
                value={haircol}
                onChange={(e) => setHaircol(e.target.value)}
                required
              />

              <p>{herostatus}</p>

              <div className="mt-[1.5rem] flex flex-col justify-center items-center">
                <button type="submit" className="form-btn">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-around gap-10">
          <p>Hero has been created successfully</p>
          <div className="flex items-center justify-around gap-10">
            <button
              className="btn-action w-[200px]"
              onClick={() => {
                window.location.href = "/newhero";
              }}
            >
              Create Again
            </button>

            <button
              className="btn-action w-[200px]"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Homepage
            </button>

            <button
              className="btn-action w-[200px]"
              onClick={() => {
                window.location.href = "/profile";
              }}
            >
              See your hero
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateHero;
