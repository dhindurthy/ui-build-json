import React from "react";
import Input from "./Input";
import Select from "./Select";
import "./AddField.scss";
import AddOption from "./AddOption";

class AddField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: null,
      fnameValue: "",
      fdescValue: "",
      fidValue: "",
      ftypeValue: "",
      fvalidation: "",
      typeDropdown: {
        label: "Type",
        options: [
          { label: "Radiobutton", value: "radiobutton" },
          { label: "Dropdown", value: "dropdown" },
          { label: "Input", value: "input" },
          { label: "Checkbox", value: "checkbox" }
        ]
      },
      validationDropdown: {
        label: "Validation",
        options: [
          { label: "Alphanumeric", value: "alphanumeric" },
          { label: "Number", value: "number" },
          { label: "Date", value: "date" }
        ]
      },
      showOptionUi: false,
      options: []
    };
    this.onFnameChange = this.onFnameChange.bind(this);
    this.onFdescChange = this.onFdescChange.bind(this);
    this.onFidChange = this.onFidChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onValidationChange = this.onValidationChange.bind(this);
    this.onAddOption = this.onAddOption.bind(this);
    this.hideOptionUi = this.hideOptionUi.bind(this);
    this.captureOption = this.captureOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.onClick = this.onClick.bind(this);
    this.reset = this.reset.bind(this);
  }
  onFnameChange(e) {
    this.setState({ fnameValue: e.target.value });
  }
  onFidChange(e) {
    this.setState({ fidValue: e.target.value });
  }
  onFdescChange(e) {
    this.setState({ fdescValue: e.target.value });
  }
  onTypeChange(option) {
    this.setState({ ftypeValue: option.value });
  }
  onValidationChange(option) {
    this.setState({ fvalidation: option.value });
  }
  onAddOption(e) {
    this.setState({ showOptionUi: true });
    e.preventDefault();
  }
  hideOptionUi() {
    this.setState({ showOptionUi: false });
  }
  captureOption(option) {
    let options = this.state.options;
    option.parentId = this.state.fidValue;
    options.push(option);
    this.setState({ options: options });
    let optionString = JSON.stringify(options, null, " ");
    this.setState({ optionString: optionString });
  }
  deleteOption(index) {
    let options = this.state.options;
    options.splice(index, 1);
    this.setState({ options: options });
  }
  onClick(e) {
    let featureObj = {};
    featureObj.id = this.state.fidValue;
    featureObj.label = this.state.fnameValue;
    featureObj.type = this.state.ftypeValue;
    featureObj.validation = this.state.fvalidation;
    featureObj.options = this.state.options;
    this.setState({ feature: featureObj });
    e.preventDefault();
    let featureString = JSON.stringify(featureObj, null, " ");
    this.setState({ featureString: featureString });
  }
  reset() {
    this.setState({
      fidValue: "",
      fnameValue: "",
      ftypeValue: "",
      options: []
    });
  }
  render() {
    return (
      <section>
        <form id="fieldform" onSubmit={this.onClick} onReset={this.reset}>
          <fieldset>
            <legend>New Field</legend>
            <section className="properties">
              <Input
                id="fname"
                label="Name"
                type="text"
                inputValue={this.state.fnameValue}
                onChange={this.onFnameChange.bind(this)}
              />
              <Input
                id="fid"
                label="Id"
                type="text"
                inputValue={this.state.fidValue}
                onChange={this.onFidChange.bind(this)}
              />
              <Input
                id="fdesc"
                label="Description"
                type="text"
                inputValue={this.state.fdescValue}
                onChange={this.onFdescChange.bind(this)}
              />
            </section>
            <section className="properties">
              <Select
                field={this.state.typeDropdown}
                sendSelectedOption={this.onTypeChange.bind(this)}
              />
              <Select
                field={this.state.validationDropdown}
                sendSelectedOption={this.onValidationChange.bind(this)}
              />
            </section>
            <section className="added-options">
              {this.state.options.map((item, index) => (
                <div className="added-option">
                  <span>{item.label} is added</span>
                  <button
                    className="close"
                    onClick={this.deleteOption.bind(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </section>
            <br />
            <button onClick={this.onAddOption}>Add Option</button>
            {this.state.showOptionUi && (
              <section className="option-ui">
                <AddOption sendOption={this.captureOption.bind(this)} />
                <button
                  className="close"
                  onClick={this.hideOptionUi.bind(this)}
                >
                  X
                </button>
              </section>
            )}
            <br />
            <br />
            <br />
          </fieldset>
          <button type="submit">Save Field</button>
          <button type="reset">Reset Field</button>
        </form>

        <div className="feature-result">
          <pre>{this.state.feature && this.state.featureString}</pre>
        </div>
      </section>
    );
  }
}

export default AddField;
