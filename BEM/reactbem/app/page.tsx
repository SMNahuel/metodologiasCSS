import { ButtonProfile } from "./components/button";

const profile = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="profile">
          <img alt="imgProfile" className="profile__img"  src={"https://avatars.githubusercontent.com/u/81668762?v=4"}/>
          <h2 className="profile__name">Nahuel Sanchez</h2>
          <h3 className="profile__ubication">Corrientes, Argentina</h3>
          <p className="profile__occupation">
            "Front End Developer and avid reader"
          </p>

          {profile.map((data) => {
            return <ButtonProfile profile={data}/>;
          })}
        </div>
      </div>
    </>
  );
}
