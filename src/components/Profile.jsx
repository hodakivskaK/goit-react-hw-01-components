import PropTypes from 'prop-types';
import ProfileCss from './ProfileCard.module.css'

export const ProfileCard = ({
  username,
  tag, 
location ,
avatar,
  stats }) => {
  
  return (
    <div className={ ProfileCss.profile} >
  <div className={ ProfileCss.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={ ProfileCss.avatar}
    />
        <p className={ ProfileCss.name}>{ username}</p>
        <p className={ ProfileCss.tag}>@{ tag}</p>
        <p className={ ProfileCss.location}>{location}</p>
  </div>

  <ul className={ ProfileCss.stats}>
    <li>
      <span className={ ProfileCss.label}>Followers: </span>
          <span className={ ProfileCss.quantity}>{ stats.followers}</span>
    </li>
    <li>
      <span className={ ProfileCss.label}>Views: </span>
      <span className={ ProfileCss.quantity}>{ stats.views}</span>
    </li>
    <li>
      <span className={ ProfileCss.label}>Likes: </span>
      <span className={ ProfileCss.quantity}>{ stats.likes}</span>
    </li>
  </ul>
</div>)
  
}


// "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
}

