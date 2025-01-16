import React from "react"

import { sourcesElement } from "../utils/sources"

export default function Sources() {

  /* --- Radio Buttons --- */

  // Represents the currently active radio button filter
  // Also determines which table header should be bold down in the JSX
  const [radioFilter, setRadioFilter] = React.useState('Name')
  
  // Array used for generating the radio buttons
  const radioButtonArray = [
    { id: 1, name: 'Name', checked: true},
    { id: 2, name: 'Page', checked: false},
    { id: 3, name: 'Source', checked: false},
    { id: 4, name: 'Licence', checked: false}
  ]

  // Generates the radio buttons via above array
  // onClick method grabs the value of the selected button and saves it to state
  const radioButtonElement = radioButtonArray.map((button) => {
    return (
      <div className="col-6" key={button.id}>
        <label className='source-radio'>
          <input
            id={`radio-${button.name}`}
            type="radio"
            name="search-filter"
            value={button.name}
            defaultChecked={button.checked
              ? "checked"
              : ""}
            onClick={() => {
              const radioSelect = document.querySelector('input[name="search-filter"]:checked').value
              setRadioFilter(radioSelect)
            }}
          />
          {button.name}
        </label>
      </div>
    )
  })

  // Runs the search function anytime a filter is changed to avoid desync
  React.useEffect(() => {
    sourceSearch()
  },[radioFilter])

  /* --- Searchbar --- */

  // Represents the current value of the searchbar
  const [inputValue, setInputValue] = React.useState('')

  // Grabs the value of the searchbar and saves it to state
  // Triggers onChange on the searchbar <input>
  function handleChange(event) {
    const {value} = event.currentTarget
    setInputValue(value)
  }

  // Sets the value of the searchbar equal to state to ensure a single source of truth
  // Runs the search function
  // Runs anytime state is changed to avoid a desync
  React.useEffect(() => {
    document.querySelector('.myInput').value = inputValue
    sourceSearch()
  },[inputValue])

  /* --- Results Filter --- */

  //Enables searchbar functionality and filters results by radio button selected
  function sourceSearch() {
    let tr, td, i, txtValue;
    let input = inputValue
    let filter = input.toUpperCase();
    let table = document.getElementById("sourcesTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      if (radioFilter === 'Name') {
          td = tr[i].getElementsByTagName("td")[0];
      } else if (radioFilter === 'Page') {
          td = tr[i].getElementsByTagName("td")[1];
      } else if (radioFilter === 'Source') {
          td = tr[i].getElementsByTagName("td")[2];
      } else if (radioFilter === 'Licence') {
          td = tr[i].getElementsByTagName("td")[3];
      } 
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
      }
    }
  };
  
  return (
    <div className="view-body">
      <div className="sources-intro">
        <h1>Sources</h1>
      </div>
      <div className="row container-fluid sources-control-panel">
        <div className="col-sm-6 col-12 source-radio-select">
          <h3>Sort by:</h3>
          <div className="row">
            {radioButtonElement}
          </div>
        </div>
        <div className="col-sm-6 col-12 source-searchbar">
          <h3>Search:</h3>
          <input
            className="myInput"
            type="text"
            id="myInput"
            placeholder="Search"
            onChange={handleChange}
            value={inputValue}
          />
        </div>
      </div>

      <div className="sources-table">
        <table id="sourcesTable" className="sourcesTable">
          <tbody>
            <tr>
              <th className={radioFilter === 'Name'
                ? 'sources-table-pages tableHeaderBold'
                : 'sources-table-pages'
              }
              >Name:</th>

              <th className={radioFilter === 'Page'
                ? 'sources-table-pages tableHeaderBold'
                : 'sources-table-pages'
              }
              >Pages:</th>

              <th className={radioFilter === 'Source'
                ? 'sources-table-pages tableHeaderBold'
                : 'sources-table-pages'
              }
              >Source:</th>

              <th className={radioFilter === 'Licence'
                ? 'sources-table-pages tableHeaderBold'
                : 'sources-table-pages'
              }
              >Licence:</th>

            </tr>
            {sourcesElement}
          </tbody>
        </table>
      </div>
    </div>
  )
}