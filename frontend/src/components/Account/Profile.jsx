import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Loading from "../Loading/Loading";

const Profile = ({ setIsLoggedIn }) => {
  const [newHero, setNewHero] = useState([]);
  const [loading, setLoading] = useState(false);
  const storedName = sessionStorage.getItem("user");
  const storedToken = sessionStorage.getItem("jwtToken");

  useEffect(() => {
    async function fetchNewHero() {
      try {
        setLoading(true);
        setTimeout(async () => {
          const response = await axios.get(
            `http://localhost:3000/allnewheroes/${encodeURIComponent(
              storedName
            )}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${storedToken}`,
              },
            }
          );
          const data = response.data;
          setNewHero(data);
          console.log(data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log(error);
        window.location.href = "/notfound";
      }
    }
    fetchNewHero();
  }, []);
  console.log(newHero);

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-center mb-[5rem]">
      <div className="flex flex-col items-center justify-center gap-[2rem] mt-[2rem]">
        <div className="flex items-center justify-center gap-[2rem]">
          <img
            className="w-[200px]"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4860795e-12c4-4bc2-bd7a-4b55c30df95c/df1xaqt-8b981017-0375-4035-a0cc-2909b6cbd42b.png/v1/fill/w_564,h_651/superhero_profile_by_alexbadass_df1xaqt-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUxIiwicGF0aCI6IlwvZlwvNDg2MDc5NWUtMTJjNC00YmMyLWJkN2EtNGI1NWMzMGRmOTVjXC9kZjF4YXF0LThiOTgxMDE3LTAzNzUtNDAzNS1hMGNjLTI5MDliNmNiZDQyYi5wbmciLCJ3aWR0aCI6Ijw9NTY0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TaYbRw-y1YNwFB80EJz2xMPP3T13cjGdU7QuDmOo4CA"
            alt="Profile"
          />
          <div>
            <p>{storedName}&apos;s superheroes</p>
          </div>
          <div>
            <button className="btn-action" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] w-[600px]">
          <Loading
            loading={loading}
            url={"http://localhost:5173/src/assets/spidermeme.gif"}
          />
          {newHero.length === 0 ? (
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold">
                Non hai creato ancora nessun eroe, rimedia usando questo bottone
              </p>
            </div>
          ) : (
            newHero.map((heroes) =>
              Object.entries(heroes).map(([id, hero]) => (
                <div
                  className="flex items-center justify-between"
                  key={id.toString()}
                >
                  <div className="flex items-center justify-between flex-grow">
                    <ul className="mr-[1rem]">
                      <li>Name: {hero.name}</li>
                      <li>Gender: {hero.gender}</li>
                      <li>Race: {hero.race}</li>
                      <li>Height: {hero.height}</li>
                      <li>Weight: {hero.weight}</li>
                      <li>Eye Color: {hero.eyecol}</li>
                      <li>Hair Color: {hero.haircol}</li>
                    </ul>
                    <div className="flex items-center gap-[1rem]">
                      <button
                        className="btn-action"
                        onClick={() =>
                          (window.location.href = `/modify/newhero/${hero.id}`)
                        }
                      >
                        <ModeEditIcon />
                      </button>
                      <button
                        className="btn-action"
                        onClick={() =>
                          (window.location.href = `/delete/newhero/${hero.id}`)
                        }
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )
          )}
        </div>
        <Link to="/newhero">
          <button className="btn-action w-[250px]" type="button">
            Create Another Hero
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
