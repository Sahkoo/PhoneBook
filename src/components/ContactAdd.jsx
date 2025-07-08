import React, { useState } from "react"

const ContactAdd = ({ onAdd }) => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    // Генерація id через timestamp + випадковий суфікс
    const generateId = () =>
        Date.now().toString(36) + Math.random().toString(36).substr(2, 5)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim() || !number.trim()) return
        const newContact = { id: generateId(), name: name.trim(), number: number.trim() }
        const added = onAdd(newContact)
        if (added) {
            setName("")
            setNumber("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label>
                Number:
                <input
                    type="tel"
                    name="number"
                    pattern="\\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    )
}

export default ContactAdd