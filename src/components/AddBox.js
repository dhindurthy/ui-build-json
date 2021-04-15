import React from "react";
import AddField from "./AddField";

export default class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._changeBox = this._changeBox.bind(this);
    this.showNewBox = this.showNewBox.bind(this);
  }
  showNewBox() {
    this.setState({ showNewBox: true });
  }
  _changeBox(fields) {}
  render() {
    return (
      <section>
        <button className="new-add" onClick={this.showNewBox.bind(this)}>
          + Add Group
        </button>
        {this.state.showNewBox && (
          <section className="field-box">
            <AddField />
          </section>
        )}
      </section>
    );
  }
}
