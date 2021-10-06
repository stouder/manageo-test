import React from "react";
import './PersonnList.css';

class PersonnList extends React.Component {

  render() {
    const people = this.props.people;

    return (
      <div>
        {people.map((personn) => (
          <li>
            {personn.id} - {personn.name} - {personn.firstname} - {personn.email}
            <button onClick={() =>
              this.props.deleteById(personn.id)}>Delete
            </button>
            <button onClick={() =>
              this.props.updateById(personn.id)}>Update
            </button>
          </li>

        ))}
      </div>
    );
  }
}

export default PersonnList;