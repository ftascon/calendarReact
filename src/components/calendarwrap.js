import React, {Component} from 'react';
import CalControls from "./calcontrols";
import CalTitle from "./caltitle";
import CalMonth from "./calmonth";
import "../styles/header.css";
import "../styles/content.css";
import "../styles/wrapper.css";

class CalendarWrap extends Component {
    constructor(props) {
        super(props);
        this.baseMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.baseDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        this.baseDate = new Date();
        this.state = {
            currentDate: this.baseDate,
            currentMonth: this.baseDate.getMonth(),
            currentYear: this.baseDate.getFullYear(),
            currentDays: [],
            events: []
        }
    }

    sortDates() {
        const output = [];
        for (let i = 0; i < window._calDates.data.length; i++) {
            let date = new Date(parseInt(Math.floor(window._calDates.data[i][0] * 1000)));
            window._calDates.data[i][0] = date;
            if (date.getFullYear() == this.state.currentYear) {
                if (date.getMonth() == this.state.currentMonth) {
                    if (!output[date.getDate()]) {
                        output[date.getDate()] = [];
                    }
                    output[date.getDate()].push(window._calDates.data[i]);
                }
            }
        }
        return output;
    }

    /* - GET DATA - */
    getDaysByMonth() {
        const output = [];
        /* GET DAY OF WEEK FOR FIRST DAY OF THE MONTH */
        const dayOne = new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth(), 1);
        const naturalOne = ((dayOne.getDay()) == 0) ? 6 : (dayOne.getDay() - 1);
        /* PLAY DATE */
        const playDate = new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth(), 1);
        playDate.setDate(dayOne.getDate() - naturalOne);
        for (let i = 0; i < 7; i++) {
            const week = [];
            for (let e = 0; e < 7; e++) {
                let ev = []
                if (this.state.events[playDate.getDate()]) {
                    ev = this.state.events[playDate.getDate()];
                }
                week.push([playDate.getDate(), ev]);
                playDate.setDate(playDate.getDate() + 1);
            }
            output.push(week);
        }
        return output;
    }

    /* - BASE METHODS - */
    updateMonth() {
        this.setState({
            currentDate: this.state.currentDate,
            currentMonth: this.state.currentDate.getMonth(),
            currentYear: this.state.currentDate.getFullYear(),
            currentDays: this.getDaysByMonth(),
            events: this.sortDates()
        });
    }

    componentWillMount() {
        console.log();
        this.updateMonth();
    }

    /* - MANAGE CONTROLS - */
    rightHandler = () => {
        this.state.currentDate.setMonth(this.state.currentDate.getMonth() + 1);
        this.updateMonth();
    }

    leftHandler = () => {
        this.state.currentDate.setMonth(this.state.currentDate.getMonth() - 1);
        this.updateMonth();
    }

    todayHandler = () => {
        this.state.currentDate.setTime(new Date());
        this.updateMonth();
    }

    render() {
        return (
            <div>
                <div className={"monthHeader"}>
                    <CalControls menu={"left,right,today"}
                                 dateControls={[this.leftHandler, this.rightHandler, this.todayHandler]}/>
                    <CalTitle title={this.baseMonths[this.state.currentMonth] + " " + this.state.currentYear}/>
                </div>
                <div className={"monthContent"}>
                    <CalMonth ref={"calMonth"} days={this.state.currentDays} titles={this.baseDays}/>
                </div>
            </div>
        )
    }
}

export default CalendarWrap;