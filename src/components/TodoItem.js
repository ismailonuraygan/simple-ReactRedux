import React from 'react'
import {Checkbox} from '@material-ui/core';

const TodoItem = ({name, done, id}) => {
    const handleCheck = () =>{

    }
    return (
        <div className="todoItem" >
            <Checkbox
                checked={done}
                color="secondary"
                onChange={handleCheck}
             inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            {/* name */}
            <p className={done && "todoItem--done"} >{name}</p>
        </div>
    )
}

export default TodoItem
