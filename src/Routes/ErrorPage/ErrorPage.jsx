import { useNavigate, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError()
  console.error(error)
  function handleClick() {
    navigate("/HomePage");
  }

  return (
    <div className="ErrorPage">
      <div className="ErrorContent">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c61083a9-4363-48b6-a229-f82b28e77fdb/d8oqq30-59477020-06ab-43c8-8415-48356451d79f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MTA4M2E5LTQzNjMtNDhiNi1hMjI5LWY4MmIyOGU3N2ZkYlwvZDhvcXEzMC01OTQ3NzAyMC0wNmFiLTQzYzgtODQxNS00ODM1NjQ1MWQ3OWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HPQmjSqHU0LYo2WMT4C7WhmahGPBErrtEGHKqQZWkK0"></img>
        <h1>ATTENTION, TEMPLAR AREA!</h1>
        <p>This page does not exist!</p>
        <button onClick={handleClick}>Back to Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
