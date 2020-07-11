import React from 'react';
import './planet-row.scss';

const PlanetRow = (props) => {
    const { currentItem } = props;
    const populationNo = isNaN(currentItem.population) ? 0 : currentItem.population;
    return (
        <div>
            <div className="planet-row" style={{width: `${(populationNo / 10000)}px`,}}>
                <div className="planet-row__planet">{currentItem.name}</div>
                <div className="planet-row__population">
                    {populationNo}
                </div>
            </div>
        </div>
    )
}

export default PlanetRow;