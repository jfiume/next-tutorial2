import React from 'react'

export default class Error extends React.Component {
  static getInitalProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <p>
        {this.props.statusCode
        ? `An error ${this.props.statusCode} occured on server`
      : 'An error occured on client'}
      </p>
    )
  }
}
