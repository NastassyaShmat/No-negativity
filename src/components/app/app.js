import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employee-list/employee-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Shmat N.", salary: 800, increase: false, like: true, id: 1 },
        {
          name: "Shkutovich V.",
          salary: 950,
          increase: true,
          like: false,
          id: 2,
        },
        { name: "Zhuk M.", salary: 900, increase: false, like: false, id: 3 },
        {
          name: "Ostreiko N.",
          salary: 800,
          increase: false,
          like: false,
          id: 4,
        },
        {
          name: "Skokovets M.",
          salary: 900,
          increase: false,
          like: false,
          id: 5,
        },
        {
          name: "Chemodanov D.",
          salary: 1200,
          increase: false,
          like: false,
          id: 6,
        },
      ],
      tern: "",
      filter: "all",
    };
    this.id = 7;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((elem) => elem.id !== id),
    }));
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.id++,
    };
    if (name !== "" || salary !== "") {
      this.setState(({ data }) => {
        const newArray = [...data, newItem];

        return {
          data: newArray,
        };
      });
    }
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmployee = (items, tern) => {
    if (tern.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(tern) > -1;
    });
  };

  onUpdateSearch = (tern) => {
    this.setState({ tern });
  };

  filterEmployee = (items, filter) => {
    switch (filter) {
      case "like":
        return items.filter((item) => item.like);
      case "salary":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, tern, filter } = this.state;
    const increased = data.filter((item) => item.increase).length;
    const visibleData = this.filterEmployee(
      this.searchEmployee(data, tern),
      filter
    );

    return (
      <div className="app">
        <AppInfo onCountItems={data.length} onCountIncreased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
