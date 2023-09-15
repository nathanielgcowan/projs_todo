'use client'

import React from 'react'

export default function SubmitForm(props) {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.handleSubmit()}>
                <input placeholder='Add Task'/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
