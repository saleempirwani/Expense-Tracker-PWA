import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {

    const { transactions } = useContext(GlobalContext)
    let total = 0
    
    if (transactions.length !== 0) {
        const amount = transactions.map((transaction) => transaction.amount)
        total = amount.reduce((acc, item) => (acc += item)).toFixed(2)
    }

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>

        </>
    )
}