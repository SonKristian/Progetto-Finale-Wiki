import { useState } from "react";
import { useParams } from "react-router-dom";
import "./css/register.css";

const CreateHero = () => {
  const { id } = useParams()
  const [herostatus, setHerostatus] =  useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    const storedToken = sessionStorage.getItem('jwtToken');
    const storedName = sessionStorage.getItem('user');


    try{
        const response = await fetch(`http://localhost:3000/newhero/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Berear ${storedToken}`,
              "user" : storedName,
            },
          });

          if (response) {
            setHerostatus("Hero deletion : successful");
            // Clear form inputs
           
          } else {
            setHerostatus("Hero deletion : failed");
          }
  } catch (error) {
    setHerostatus("Error occurred during deletion");
    console.error(error);
  }
}


  return (
   
   <div className="flex justify-center items-center mb-[5rem] mt-[4rem]">
    {!herostatus ? (
    <div className="form-ctn">
      <form onSubmit={handleDelete}>
        <div className="flex flex-col justify-center">
          <div className="mt-[1.5rem] flex flex-col justify-center items-center">
          <h1>Delete your hero</h1>
          <p>If you click this button you will delete your Hero!</p>
          </div>

          <p>{herostatus}</p>

          <div className="mt-[1.5rem] flex flex-col justify-center items-center">
          <button type="submit" className="form-btn">
            Delete
          </button>
          </div>
        </div>
      </form>
    </div>
      ):(
        <div className="flex flex-col items-center justify-around gap-10">
        <p>Hero has been created successfully</p>
        <div className="flex items-center justify-around gap-10">
        <button className="btn-action w-[200px]" onClick={() => {window.location.href = "/newhero"}}>
            Create Again
        </button>

        <button className="btn-action w-[200px]" onClick={() => {window.location.href = "/"}}>
            Homepage
        </button>


        <button className="btn-action w-[200px]" onClick={() => {window.location.href = "/profile"}}>
            See your hero
        </button>
        </div>
    </div>
  )}
    </div>
  )
}

export default CreateHero;