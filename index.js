/* - Defaults - */
import React from 'react';
import {render} from 'react-dom';

/* - Components - */
import CalendarWrap from './src/components/calendarwrap';

const app = document.getElementById('calendar_js');

render(<CalendarWrap />, app);
