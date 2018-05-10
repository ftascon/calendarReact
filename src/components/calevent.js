/* - defaults - */
import React, {Component} from 'react';

class CalEvent extends Component {
    convertDate(inputFormat) {
        function pad(s) {
            return (s < 10) ? '0' + s : s;
        }

        var d = new Date(inputFormat);
        var full = [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-') + ' ';
        return [d.getHours(), d.getUTCMinutes()].join(':');
    }

    render() {
        return (
            <div className={"event"}>
                {this.props.event[1]}
                <span>{this.convertDate(this.props.event[0])}</span>
            </div>
        )
    }
}

export default CalEvent;