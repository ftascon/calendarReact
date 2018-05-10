/* - defaults - */
import React, {Component} from 'react';
import CalDay from "./calday";
import "../styles/week.css";

class CalWeek extends Component {
    render() {
        const week = this.props.days.map((day, index) =>
            <CalDay key={index + '_day'} day={day[0]} events={day[1]}/>
        );
        return (
            <div className={"week"}>
                {week}
            </div>
        )
    }
}

export default CalWeek;