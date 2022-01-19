import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);

    this.setState({
      name: '',
      salary: ''
    });
  }
 
  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            className="form-control new-post-label"
            type="text"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            className="form-control new-post-label"
            type="number"
            placeholder="З/П в $"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button className="form-control new-post-label" type="submit" >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
