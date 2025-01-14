import { attributionsList } from '../data/attributionsdata.js';

//Sorts attributionsList alphabetically
attributionsList.sort((a, b) => a.name.localeCompare(b.name))

//Generates IDs for each data entry based on index in the array
attributionsList.map((item, index) => {
    return item.id = `card-${index}`;
})

//Populates attributionsTable with data from attributionsdata.js
export const attributionsElement = attributionsList.map((item) => {
    return (
        <tr key={item.id}>
            <td><div>{item.name}</div></td>
            <td><div>{item.page}</div></td>
            <td>
                <div>
                    <a target='_blank' href={item.source}>
                        {item.sourceName}
                    </a>
                    {item.sourceB
                        ? <a target='blank' href={item.sourceB}>
                         {item.sourceBName}</a>
                        : null}
                </div>
            </td>
            <td>
                <div>
                    <a target='_blank' href={item.licence}>
                        {item.licenceName}
                    </a>
                </div>
            </td>
        </tr>
    )
})