import PropTypes from 'prop-types';
import StatisticsCss from './Statistics.module.css'
 
export const Statistics = ({title, stats }) => {
      
      return (
            <section className={StatisticsCss.statistics} >
            {title &&
                  (<h2 className={StatisticsCss.title}>{title}</h2>)
           
            }
            
            <ul className= {StatisticsCss.statList}>
                        
                  {stats.map(stat => 
                  
                  <li className= {StatisticsCss.item} key={stat.id}>
                        <span className={StatisticsCss.label}>{stat.label}</span>
                        <span className={StatisticsCss.percentage}>{stat.percentage}</span>
                    </li>)}
                  
                        
            </ul>
</section>)
}


StatisticsCss.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}


    
