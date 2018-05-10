/* - defaults - */
import React, {Component} from 'react';
import CalEvent from "./calevent";

class CalDay extends Component {
    render() {
        const events = this.props.events.map((ev, index) =>
            <CalEvent key={index + '_events'} event={ev}/>
        );
        return (
            <div className={"day"}>
                {this.props.day}
                {events}
            </div>
        )
    }
}

export default CalDay;