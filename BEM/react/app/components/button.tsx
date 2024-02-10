export const ButtonProfile = (props: any) => {
  return (
    <button className="profile__button profile__button--hover" type="button">
      {props.profile}
    </button>
  );
};
