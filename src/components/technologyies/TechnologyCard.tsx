import React from 'react';
import type { Technology } from '../../types/Technology';
interface TechnologyCardProps{
    technology:Technology
}
const TechnologyCard = ({technology}:TechnologyCardProps) => {
    return (
        <div>
          <h2>{technology.name}</h2>  
        </div>
    );
};

export default TechnologyCard;