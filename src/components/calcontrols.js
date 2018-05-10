import React, {Component} from 'react';

class CalControls extends Component {
    constructor(props) {
        super(props);
        this.baseControls = {
            right: {
                txt: 'Siguiente',
                action: this.props.dateControls[1]
            },
            today: {
                txt: 'Hoy',
                action: this.props.dateControls[2]
            },
            left: {
                txt: 'Anterior',
                action: this.props.dateControls[0]
            },
        };
    }

    render() {
        const buttons = this.props.menu.split(',').map((txt, index) =>
            <dt key={index + txt.trim()}>
                <button onClick={this.baseControls[txt.trim()].action} className={"control_" + txt.trim()}
                        >{this.baseControls[txt.trim()].txt}</button>
            </dt>
        );
        return (
            <dl>
                {buttons}
            </dl>
        )
    }
}

export default CalControls;