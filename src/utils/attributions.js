import { attributionsList } from '../js/data/attributionsdata.js';

//Sorts attributionsList alphabetically
attributionsList.sort((a, b) => a.name.localeCompare(b.name))

//Populates attributionsTable with data from attributionsdata.js
let attributionsHTML = `<tr>
    <th class="attributions-table-name tableHeaderBold">Name:</th>

                <th class="attributions-table-pages">Pages:</th>
                <th class="attributions-table-source">Source:</th>
                <th class="attributions-table-licence">Licence:</th>
            </tr`;

attributionsList.forEach((item) => {
    if (item.sourceB !== undefined) {
        attributionsHTML += `
        <tr>
            <td><div>${item.name}</div></td>
            <td><div>${item.page}</div></td>
            <td>
                <div>
                    <a target="_blank" href="${item.source}">
                        ${item.sourceName}
                    </a>
                    /
                    <a target="_blank" href="${item.sourceB}">
                        ${item.sourceBName}
                    </a>
                </div>
            </td>
            <td>
                <div>
                    <a target="_blank" href="${item.licence}">
                        ${item.licenceName}
                    </a>
                </div>
            </td>
        </tr>
        `;
    } else {
        attributionsHTML += `
        <tr>
            <td><div>${item.name}</div></td>
            <td><div>${item.page}</div></td>
            <td>
                <div>
                    <a target="_blank" href="${item.source}">
                        ${item.sourceName}
                    </a>
                </div>
            </td>
            <td>
                <div>
                    <a target="_blank" href="${item.licence}">
                        ${item.licenceName}
                    </a>
                </div>
            </td>
        </tr>
        `;
    }
    
    document.querySelector('.attributionsTable').innerHTML = attributionsHTML;
})

//Generates click events for the radio buttons
let radioFilter = 'name';
const radioName = document.getElementById('radio-name');

const nameBold = document.querySelector('.attributions-table-name');
const pagesBold = document.querySelector('.attributions-table-pages');
const sourceBold = document.querySelector('.attributions-table-source');
const licenceBold = document.querySelector('.attributions-table-licence');

radioName.addEventListener('click', () => {
    radioFilter = 'name';
    attributionSearch();
    tableHeaderBold(nameBold);
});
const radioLicence = document.getElementById('radio-licence');
radioLicence.addEventListener('click', () => {
    radioFilter = 'licence';
    attributionSearch();
    tableHeaderBold(licenceBold);
});
const radioPage = document.getElementById('radio-page');
radioPage.addEventListener('click', () => {
    radioFilter = 'page';
    attributionSearch();
    tableHeaderBold(pagesBold);
});
const radioSource = document.getElementById('radio-source');
radioSource.addEventListener('click', () => {
    radioFilter = 'source';
    attributionSearch();
    tableHeaderBold(sourceBold);
});

const myInputEvent = document.getElementById('myInput');
myInputEvent.addEventListener('keyup', () => {
    attributionSearch();
});


//Displays custom CSS for the table th of the radio button selected
function tableHeaderBold(exception) {
    nameBold.classList.remove('tableHeaderBold');
    pagesBold.classList.remove('tableHeaderBold');
    sourceBold.classList.remove('tableHeaderBold');
    licenceBold.classList.remove('tableHeaderBold');

    exception.classList.add('tableHeaderBold');
}


//Enables searchbar functionality and filters results by radio button selected
function attributionSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("attributionsTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        if (radioFilter === 'name') {
            td = tr[i].getElementsByTagName("td")[0];
        } else if (radioFilter === 'page') {
            td = tr[i].getElementsByTagName("td")[1];
        } else if (radioFilter === 'source') {
            td = tr[i].getElementsByTagName("td")[2];
        } else if (radioFilter === 'licence') {
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