import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
   return (
     <div className={css.friendListItem}>
       <img src={avatar} alt="Avatar" width="48" />
       <p className={css.name}>Friend name : {name}</p>
         <p className={css.isOnline ? css.isOnline : css.isOffline}>
         Friend status : {isOnline ? 'online' : 'offline'}
       </p>
     </div>
   );
}