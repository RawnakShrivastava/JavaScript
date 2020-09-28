import React from "react";

class Inputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newContact: "",
    };
  }

  updateNewContact = (e) => {
    this.setState({
      newContact: e.target.value,
    });
  };
  handleAddNew = () => {
    if (this.state.newContact.length === 0) {
      return;
    }
    this.props.addNew(this.state.newContact);
    this.setState({
      newContact: "",
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newContact}
          onChange={this.updateNewContact}
        />
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    );
  }
}
export default Inputs;
