import { sourcesList } from '../data/sourcesdata.js';

//Sorts sourcesList alphabetically
sourcesList.sort((a, b) => a.name.localeCompare(b.name))

//Generates IDs for each data entry based on index in the array
sourcesList.map((item, index) => {
    return item.id = `card-${index}`;
})

//Populates sourcesTable with data from sourcesdata.js
export const sourcesElement = sourcesList.map((item) => {
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