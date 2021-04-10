import React from "react";
import Input from "./Input";

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: [],
      onameValue: "",
      oidValue: ""
    };

    this.onOnameChange = this.onOnameChange.bind(this);
    this.onOidChange = this.onOidChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  onOnameChange(e) {
    this.setState({ onameValue: e.target.value });
  }
  onOidChange(e) {
    this.setState({ oidValue: e.target.value });
  }
  onClick(e) {
    let option = {};
    option.id = this.state.oidValue;
    option.label = this.state.onameValue;
    this.setState({ option: option }, this.props.sendOption(option));
    e.preventDefault();
    this.setState({
      onameValue: "",
      oidValue: ""
    });
  }
  reset() {
    this.setState({
      onameValue: "",
      oidValue: ""
    });
  }
  render() {
    return (
      <section>
        <section id="option-form">
          <fieldset>
            <legend>New Option {this.state.onameValue}</legend>
            <Input
              id="oname"
              label="Option Name"
              type="text"
              inputValue={this.state.onameValue}
              onChange={this.onOnameChange.bind(this)}
            />
            <Input
              id="oid"
              label="Option Id"
              type="text"
              inputValue={this.state.oidValue}
              onChange={this.onOidChange.bind(this)}
            />
          </fieldset>

          <button type="submit" onClick={this.onClick}>
            Save Option
          </button>
          <button type="reset" onClick={this.reset.bind(this)}>
            Reset Option
          </button>
        </section>
      </section>
    );
  }
}

export default AddOption;
