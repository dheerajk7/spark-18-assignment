import React, { Component } from "react";
import { connect } from "react-redux";
import { updateState } from "../actions";

class RightContainer extends Component {
  handleCancle = (e) => {
    this.props.dispatch(
      updateState(e.target.dataset.value, e.target.dataset.place, false)
    );
  };

  render() {
    const { list } = this.props;
    return (
      <div className="right-container">
        {list.map((item) => {
          if (item.list.length > 0) {
            return (
              <ul>
                <li className="heading">{item.title}</li>
                {item.list.map((i) => {
                  return (
                    <li className="item">
                      <span>{i}</span>
                      <i
                        data-value={i}
                        data-place={item.title}
                        className="fa fa-times"
                        onClick={this.handleCancle}
                      ></i>{" "}
                    </li>
                  );
                })}
              </ul>
            );
          } else {
            return "";
          }
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    list: state.list,
  };
}
export default connect(mapStateToProps)(RightContainer);
