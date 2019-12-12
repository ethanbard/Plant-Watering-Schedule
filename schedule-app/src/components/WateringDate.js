import React, {Component} from 'react';

class WateringDate extends Component {

    render() {

        const date = this.props.wateringDate;
        const plants = this.props.plants;

        var plantNames = [];

        for (var i = 0; i < plants.length; i++) {
            if (plants[i].dates.indexOf(date.toDateString()) !== -1) {
                plantNames.push(plants[i].plantName);
            }
        }
        
        return (
            <div>
                <h2>{date.toDateString()} - </h2>
                {plantNames.map((name) =>{
                    return <h2>{name}</h2>
                })}
                <br />
            </div>
        );
    }

}

export default WateringDate;