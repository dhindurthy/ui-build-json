import React from "react";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {},
      value: ""
    };
    this._changeOption = this._changeOption.bind(this);
  }
  _changeOption(e) {
    let field = this.props.field;
    let selectedOption;
    let options = field.options;
    for (let a = 0; a < options.length; a++) {
      if (options[a].value === e.target.value) {
        selectedOption = options[a];
      }
    }
    this.setState((state) => ({
      selectedOption: selectedOption
    }));
    this.props.sendSelectedOption(selectedOption);
  }
  render(props) {
    return (
      <section className="field">
        <label>{this.props.field.label}</label>
        <select onChange={this._changeOption.bind(this)}>
          <option value="">Select</option>
          {this.props.field.options.map((item, index) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </section>
    );
  }
}

export default Select;
