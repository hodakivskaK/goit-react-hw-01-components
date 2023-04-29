import PropTypes from 'prop-types';

import { FriendListItem } from "./FriendListItem"
import FriendListCss from './FriendList.module.css'

export const Friends = ({ friends }) => {
    // return console.log(friends.avatar)
    return <ul className={ FriendListCss.friendList} >
        {friends.map(friend => 
                          <FriendListItem key={friend.id} id={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />)

                  }
    </ul>
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
}