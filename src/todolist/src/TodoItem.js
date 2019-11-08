import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
      console.log('child render');
        return (
            <div
                onClick={this.handleClick}
            >
                {this.props.content}
            </div>
        );
    }
    handleClick() {
        this.props.deleteItem(this.props.index);
    }
}

  TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
  };

  TodoItem.defaultProps = {
    test: 'hello world'
  };

export default TodoItem