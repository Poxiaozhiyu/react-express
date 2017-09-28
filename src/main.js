'use strict';

var $ = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './js/IndexComponent';

$(function() {
  ReactDOM.render(<Comp />, document.getElementById('div1'));
});
