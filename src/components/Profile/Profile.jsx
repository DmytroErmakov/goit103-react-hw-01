import css from "../Profile/Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
      <div>
        <img src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats}>
          <span>Followers : </span>
          <span>{followers}</span>
        </li>
        <li className={css.stats}>
          <span>Views : </span>
          <span>{views}</span>
        </li>
        <li className={css.stats}>
          <span>Likes : </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
