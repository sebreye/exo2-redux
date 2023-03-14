import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addForm} from '../../formslice';

const Form = () => {
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');

    const dispatch = useDispatch();

    const Submit = (event) => {
    event.preventDefault();
    dispatch(addForm({ name, firstName, age }));
    setName('');
    setFirstName('');
    setAge('');
    };
return (
<form onSubmit={Submit}>
        <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
        First name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <button type="submit">Add</button>
    </form>
)
}

export default Form