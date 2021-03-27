import Autosaving from "./Autosaving";
import React from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

let counter = 1;

class Demo extends React.Component {
  state = {
    textValue1: " # I am the initial value. Erase me, or try the button above.",
    textValue2:
      "Focus this text area and then use the Up and Down arrow keys to see the `extraKeys` prop in action"
  };

  extraKeys = () => {
    return {
      Up: function(cm) {
        cm.replaceSelection(" surprise. ");
      },
      Down: function(cm) {
        cm.replaceSelection(" surprise again! ");
      }
    };
  };

  handleChange1 = value => {
    this.setState({
      textValue1: value
    });
  };

  handleChange2 = value => {
    this.setState({
      textValue2: value
    });
  };

  handleTextChange = () => {
    this.setState({
      textValue1: `Changing text by setting new state. ${counter++}`
    });
  };

  render() {
    return (
      <div className="container container-narrow">
        <SimpleMDEReact
          className={""}
          label="Markdown Editor"
          value={this.state.textValue1}
          onChange={this.handleChange1}
          options={{
            autofocus: true,
            spellChecker: false,
            onToggleFullScreen: false,
            toolbar: false
          }}
        />
        <hr />
        <SimpleMDEReact
          value={this.state.textValue2}
          onChange={this.handleChange2}
          extraKeys={this.extraKeys()}
        />
        <hr />
        <h4>Autosaves after refresh or sets default</h4>
        <Autosaving id="demo" value="Initial value" />
      </div>
    );
  }
}

export default Demo;