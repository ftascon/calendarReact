/* - defaults - */
import React, {Component} from 'react';
import CalWeek from "./calweek";

class CalMonth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const titles = this.props.titles.map((txt, index) =>
            <div key={index + '_dayNames'}>{txt}</div>
        );
        const weeks = this.props.days.map((week, index) =>
            <CalWeek key={index + '_week'} days={week}/>
        );

        return (
            <div>
                <div className={"monthDayNames"}>
                    {titles}
                </div>
                <div className={"monthWeeks"}>
                {weeks}
            </div>
            </div>
        )
    }
}

export default CalMonth;