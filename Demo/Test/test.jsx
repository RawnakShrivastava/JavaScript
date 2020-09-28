import React from "react";
import Inputs from "./input";
import List from "./list";

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "facebook",
      friends: ["Rahul", "Raunak"],
    };
  }

  addContact = (friend) => {
    this.setState((state) => ({
      friends: state.friends.concat([friend]),
    }));
  };

  render() {
    const { name, friends } = this.state;
    return (
      <div>
        <h3>{name}</h3>

        <Inputs addNew={this.addContact} />
        <List names={friends} />
      </div>
    );
  }
}

export default TestComponent;
