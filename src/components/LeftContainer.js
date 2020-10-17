import React, { Component } from "react";
import { connect } from "react-redux";
import { updateState } from "../actions";

class LeftContainer extends Component {
  handleChange = (e) => {
    this.props.dispatch(
      updateState(
        e.target.dataset.value,
        e.target.dataset.place,
        e.target.checked
      )
    );
  };

  render() {
    const { list } = this.props;
    return (
      <div className="left-container">
        <ul>
          <li className="heading">Portugal</li>
          <li>
            <input
              id="aasiya-jayavant"
              type="checkbox"
              data-value="Aasiya Jayavant"
              data-place="Portugal"
              checked={list.includes("Aasiya Jayavant")}
              onChange={this.handleChange}
            />
            <label htmlFor="aasiya-jayavant">Aasiya Jayavant</label>
          </li>
          <li>
            <input
              id="luvleen-lawrence"
              type="checkbox"
              data-value="Luvleen Lawrence"
              data-place="Portugal"
              checked={list.includes("Luvleen Lawrence")}
              onChange={this.handleChange}
            />
            <label htmlFor="luvleen-lawrence">Luvleen Lawrence</label>
          </li>
          <li>
            <input
              id="rey-milbourne"
              type="checkbox"
              data-value="Rey Milbourne"
              data-place="Portugal"
              checked={list.includes("Rey Milbourne")}
              onChange={this.handleChange}
            />
            <label htmlFor="rey-milbourne">Rey Milbourne</label>
          </li>
          <li>
            <input
              id="cayla-brister"
              type="checkbox"
              data-value="Cayla Brister"
              data-place="Portugal"
              checked={list.includes("Cayla Brister")}
              onChange={this.handleChange}
            />
            <label htmlFor="cayla-brister">Cayla Brister</label>
          </li>
        </ul>
        <ul>
          <li className="heading">Nicaragua</li>
          <li>
            <input
              id="deveedass-nandi"
              type="checkbox"
              data-value="Deveedass Nandi"
              data-place="Nicaragua"
              checked={list.includes("Deveedass Nandi")}
              onChange={this.handleChange}
            />
            <label htmlFor="deveedass-nandi">Deveedass Nandi</label>
          </li>
          <li>
            <input
              id="obasey-chidy"
              type="checkbox"
              data-value="Obasey Chidy"
              data-place="Nicaragua"
              checked={list.includes("Obasey Chidy")}
              onChange={this.handleChange}
            />
            <label htmlFor="obasey-chidy">Obasey Chidy</label>
          </li>
          <li>
            <input
              id="xenie"
              type="checkbox"
              data-value="Xenie Dolezelova"
              data-place="Nicaragua"
              checked={list.includes("Xenie Dolezelova")}
              onChange={this.handleChange}
            />
            <label htmlFor="xenie">Xenie Dolezelova</label>
          </li>
          <li>
            <input
              id="ezequiel-dengra"
              type="checkbox"
              data-value="Ezequiel Dengra"
              data-place="Nicaragua"
              checked={list.includes("Ezequiel Dengra")}
              onChange={this.handleChange}
            />
            <label htmlFor="ezequiel-dengra">Ezequiel Dengra</label>
          </li>
        </ul>
        <ul>
          <li className="heading">Marshall Island</li>
          <li>
            <input
              id="aaron-almaraz"
              type="checkbox"
              data-value="Aaron Almaraz"
              data-place="Marshall Islands"
              checked={list.includes("Aaron Almaraz")}
              onChange={this.handleChange}
            />
            <label htmlFor="aaron-almaraz">Aaron Almaraz</label>
          </li>
          <li>
            <input
              id="jelena-denisova"
              type="checkbox"
              data-value="Jelena Denisova"
              data-place="Marshall Islands"
              checked={list.includes("Jelena Denisova")}
              onChange={this.handleChange}
            />
            <label htmlFor="jelena-denisova">Jelena Denisova</label>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let arr = [];
  for (let item of state.list) {
    for (let i of item.list) {
      arr.push(i);
    }
  }
  return { list: arr };
}

export default connect(mapStateToProps)(LeftContainer);
