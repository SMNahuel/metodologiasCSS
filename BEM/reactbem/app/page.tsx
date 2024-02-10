import Image from "next/image";
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

      <div className="container">
        <div className="profile">
          <Image alt="imgProfile" className="profile__img" width={100} height={100}  src="/81668762.jpeg"/>
          <div className="profile_header">
            <h1 className="profile__name">Nahuel Sanchez</h1>
            <h2 className="profile__ubication">Corrientes, Argentina</h2>
          </div>
          <p className="profile__occupation">"Front End Developer and avid reader"</p>
          {profile.map((data, key) => {
            return <ButtonProfile key={key} profile={data}/>;
          })}
        </div>
      </div>

  );
}
