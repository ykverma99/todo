/* eslint-disable react/prop-types */
const Input = ({onChange,value,onClick}) => {
    return (
      <div className="input_container">
          <label className="todo_input" htmlFor="todo">
              Enter Your Task
              <input id="todo" type="text" placeholder="You'r Task" name="todo" onChange={onChange} value={value} />
          </label>
          <button onClick={onClick}>Save</button>
      </div>
    )
  }
  
  export default Input