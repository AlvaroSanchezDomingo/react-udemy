import React from 'react'


const EditExpensePage = (props) => {
    return (
        <div>
            This is from my edit component {props.match.params.id}
        </div>
    )
}

export default EditExpensePage