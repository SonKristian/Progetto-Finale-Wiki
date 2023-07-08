import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Profile = () => {
  const [newHero, setNewHero] = useState([]);
  const storedName = sessionStorage.getItem("user");

  useEffect(() => {
    async function fetchNewHero() {
      const response = await axios.get("http://localhost:3000/newhero");
      const data = await response.data;
      setNewHero(data);
    }
    fetchNewHero();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col align-center justify-center gap-[2rem] mt-[2rem]">
        <div className="flex items-center justify-center gap-[2rem]">
        <img
          className="w-[200px]"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4860795e-12c4-4bc2-bd7a-4b55c30df95c/df1xaqt-8b981017-0375-4035-a0cc-2909b6cbd42b.png/v1/fill/w_564,h_651/superhero_profile_by_alexbadass_df1xaqt-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUxIiwicGF0aCI6IlwvZlwvNDg2MDc5NWUtMTJjNC00YmMyLWJkN2EtNGI1NWMzMGRmOTVjXC9kZjF4YXF0LThiOTgxMDE3LTAzNzUtNDAzNS1hMGNjLTI5MDliNmNiZDQyYi5wbmciLCJ3aWR0aCI6Ijw9NTY0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TaYbRw-y1YNwFB80EJz2xMPP3T13cjGdU7QuDmOo4CA"
        />
        <div>
          <p>{storedName}&#39; superheroes</p>
          </div>
        </div>

        {/* <div>
        {newHero.map((hero) => (
          <div key={hero.id}>
            <p>{hero.name}</p>
            {/* Add additional fields for the new hero */}
          {/* </div>
        ))}
      </div> */}

        <div className="flex flex-row gap-[2rem]">
          <div>
          <ul>
            <li>newhero.name</li>
            <li>newhero.gender</li>
            <li>newhero.race</li>
            <li>newhero.height</li>
            <li>newhero.weight</li>
            <li>newhero.eyecol</li>
            <li>newhero.haircol</li>
          </ul>
        </div>

        <div className="flex justify-around items-center gap-[5rem]">
          <Link to="/newhero">
            <button className="btn-action w-[250px]" type="button">
              Create Another Hero
            </button>
          </Link>

          <button className="btn-action">
            <ModeEditIcon />
          </button>

          <button className="btn-action">
            <DeleteIcon />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
