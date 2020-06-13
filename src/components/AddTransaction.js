import React, { useState, useContext } from 'react'
import { Button } from '@material-ui/core'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const [id, setId] = useState(0)

    const onSubmit = e => {
        e.preventDefault()

        if (text.trim() !== '' && +amount !== 0) {
            const newTransaction = {
                id: id,  //Math.floor(Math.random() * 10000000),
                text,
                amount: +amount
            }

            addTransaction(newTransaction)

            setId(id + 1)
            setText('')
            setAmount(0)
        }
        else {
            alert('Kindly! Enter a amount or text...')
        }
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}