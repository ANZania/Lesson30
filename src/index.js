'use strict'

import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import toggleTeamImg from './modules/toggleTeamImg';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

setInterval(countTimer, 1000, '05 Septemper 2020')
toggleMenu();
togglePopUp();
tabs();
addDots();
slider();
toggleTeamImg();
calc();
sendForm();