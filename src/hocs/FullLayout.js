import React, {Component} from 'react';
import {LayoutContext, LayoutTypes} from '../contexts/LayoutContext';

class FullLayout extends Component {
  componentDidMount() {
    const {change} = this.context;
    const {title} = this.props;
    change(LayoutTypes.FULL, title);
  }

  render() {
    const {children} = this.props;
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}

FullLayout.contextType = LayoutContext;

export default FullLayout;