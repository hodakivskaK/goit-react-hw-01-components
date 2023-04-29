import { ProfileCard } from "./Profile";
import { Statistics } from './Statistics'
import { Friends } from "./FriendList";
import { Transition } from "./Transactions";
import '../index.css'

import profileName from '../user'
import dataStatistics from '../data'
import friends from '../friends'
import transitions from '../transactions'


export const Section = () => {
  return (
    <section>
      <ProfileCard {...profileName}
      />
      
      <Statistics title="Upload stats" stats = {dataStatistics}
      />

      <Friends friends={friends} />
      
      <Transition items={transitions}/>
    </section>
    
  )
}

