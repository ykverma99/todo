/* eslint-disable react/prop-types */
import { RxCross2 } from 'react-icons/rx'
import { IoCheckmarkOutline } from "react-icons/io5";
import { useState } from 'react';

const TodoList = ({text,removeItem}) => {
    const [todoCheck, settodoCheck] = useState(false)
    const taskCheck = ()=>{
        settodoCheck(e=>!e)
    }
    return (
        <li className={`todo_list ${todoCheck && 'complete'}`}>
            <span>{text}</span>
            <div className='icons'>
                <div className='check' onClick={taskCheck}>
                    <IoCheckmarkOutline size={30} />
                </div>
                <div className='wrong' onClick={removeItem}>
                    <RxCross2 size={22} />
                </div>
            </div>
        </li>
    )
}

export default TodoList