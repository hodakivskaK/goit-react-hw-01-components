import PropTypes from 'prop-types';
import FriendListItemCss from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return(
        <li className={FriendListItemCss.item} key={id}>

            {isOnline ? <span className={FriendListItemCss.statusTrue}></span> : <span className={FriendListItemCss.statusFalse}></span>}
        
        <img className= {FriendListItemCss.avatar} src={avatar} alt={name} width="48" />
        <p className= {FriendListItemCss.name} >{name}</p>
        </li>)
 
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id:  PropTypes.number.isRequired,
}