import "./styles.css";
import React from "react";
import AddField from "./components/AddField";
import AddBox from "./components/AddBox";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewFields: true,
      existingField: {
        id: "AB",
        label: "Some Field",
        type: "dropdown",
        validation: "alphanumeric",
        description: "Describe this field",
        options: [
          {
            id: "QX",
            label: "Qxx",
            parentId: "AB"
          },
          {
            id: "WX",
            label: "Wxx",
            parentId: "AB"
          },
          {
            id: "EX",
            label: "Exx",
            parentId: "AB"
          }
        ]
      },
      existingFields: [
        {
          id: "AB",
          label: "Some Field",
          type: "dropdown",
          validation: "alphanumeric",
          description: "Describe this field",
          options: [
            {
              id: "QX",
              label: "Qxx",
              parentId: "AB"
            },
            {
              id: "WX",
              label: "Wxx",
              parentId: "AB"
            }
          ]
        },
        {
          id: "XZ",
          label: "Another Field",
          type: "radiobutton",
          validation: "alphanumeric",
          description: "What's this another field",
          options: [
            {
              id: "yes",
              label: "Yes",
              parentId: "XZ"
            },
            {
              id: "no",
              label: "No",
              parentId: "XZ"
            }
          ]
        }
      ],
      existingFieldsOther: [],
      viewFieldBlock: false
    };
    this.viewBlock = this.viewBlock.bind(this);
    this.viewScreen = this.viewScreen.bind(this);
    this.editScreen = this.editScreen.bind(this);
  }
  viewBlock() {
    this.setState({ viewFieldBlock: true });
  }
  viewScreen() {
    this.setState({ viewFields: true });
    this.setState({ editFields: false });
  }
  editScreen() {
    this.setState({ viewFields: false });
    this.setState({ editFields: true });
  }
  render() {
    return (
      <div className="App">
        {!this.state.viewFieldBlock && (
          <button className="block-button" onClick={this.viewBlock.bind(this)}>
            Field Block
          </button>
        )}
        {this.state.viewFieldBlock && (
          <section className="main-screen">
            {this.state.viewFields && !this.state.editFields && (
              <section className="view-screen">
                <ul className="added-fields">
                  {this.state.existingFields.map((item, index) => (
                    <li className="field-ui">
                      <div className="added-field">
                        <ul className="added-option-details">
                          <li>label: {item.label}</li>
                          {/* <li>id: {item.id}</li> */}
                          <li>
                            options:
                            {item.options.map((it, index) => (
                              <ul>
                                <li className="option-ui">
                                  <div className="added-option">
                                    <ul className="added-option-details-view">
                                      <li>label: {it.label}</li>
                                      {/* <li>id: {it.id}</li> */}
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            ))}
                          </li>
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {this.state.editFields && !this.state.viewFields && (
              <section className="edit-screen">
                <section className="append-fields">
                  <AddField />
                  <AddBox />
                </section>
                <hr />
                {this.state.existingFields.map((item, index) => (
                  <section className="fields-edit-ui">
                    <AddField existingField={item} index={index} />
                    <AddField index={index} />
                    <AddBox index={index} />
                  </section>
                ))}
                <hr />
                <section className="append-fields">
                  <AddField />
                  <AddBox />
                </section>
              </section>
            )}
            <div class="button-bar">
              <button onClick={this.viewScreen.bind(this)}>View Fields</button>
              <button onClick={this.editScreen.bind(this)}>Edit Fields</button>
            </div>
          </section>
        )}
      </div>
    );
  }
}
