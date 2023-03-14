import React from 'react';
import { useSelector} from 'react-redux';


const Présentation =  () => {
    const tabs = useSelector((state) => state.form);


    return (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>First name</th>
            <th>Age</th>
        </tr>
        </thead>
        <tbody>
        {tabs.map((tab, index) => (
            <tr key={index}>
                <td>{tab.name}</td>
                <td>{tab.firstName}</td>
                <td>{tab.age}</td>
                <td>
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    );
}

export default Présentation;