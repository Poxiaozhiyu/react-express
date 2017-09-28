'use strict';

import React from 'react';

var pageData = require('../datas/pageData.json');

class Comp extends React.Component {
  render() {
    var pageArr = [];
    pageData.forEach((item, index) => {
      pageArr.push(<li key={index}>{item.message}</li>);
    });
    return (
      <div>
        <ol>
          {pageArr}
        </ol>
      </div>
    );
  }
}


export default Comp;