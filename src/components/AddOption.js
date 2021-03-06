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
    this.saveOption = this.saveOption.bind(this);
    this.resetOption = this.resetOption.bind(this);
  }

  onOnameChange(e) {
    this.setState({ onameValue: e.target.value });
  }
  onOidChange(e) {
    this.setState({ oidValue: e.target.value });
  }
  saveOption(e) {
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
  resetOption(e) {
    this.setState({
      onameValue: "",
      oidValue: ""
    });
    e.preventDefault();
  }
  render() {
    return (
      <section>
        <section id="option-form">
          <fieldset>
            <legend>New Option {this.state.onameValue}</legend>
            <Input
              id="oname"
              label="Option Label"
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

          <button type="submit" onClick={this.saveOption.bind(this)}>
            Save Option
          </button>
          <button type="reset" onClick={this.resetOption.bind(this)}>
            Reset Option
          </button>
        </section>
      </section>
    );
  }
}

export default AddOption;
