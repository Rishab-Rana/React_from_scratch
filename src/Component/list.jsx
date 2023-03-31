import React from 'react'
import ChildList from './ChildList'

function List() {
    const info = [
        {
            rollNo: 59,
            name: 'Rishab Rana'
        },
        {
            rollNo: 15,
            name: 'Ayush Rawat'
        },
        {
            rollNo: 45,
            name: 'Amar Negi'
        }
    ]
    const infoList = info.map( infoo => <h2> rollno: {infoo.rollNo} and name: {infoo.name}</h2>)
    return (
        <div>
            <ChildList info={infoList}/>
        </div>
    )
}

export default List     