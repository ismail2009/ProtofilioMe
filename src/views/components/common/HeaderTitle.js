import React from 'react';
import PropTypes from 'prop-types';

const HeaderTitle = ({ title }) => (
  <div className="header_title">
    <h1>{title}</h1>
  </div>
);
HeaderTitle.propTypes = {
  title: PropTypes.string
}
export default HeaderTitle;
