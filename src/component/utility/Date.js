import React from 'react'

const DateInput = ({handleChange,date}) => {

  return (
    <>
      <input
        type="text"
        name="date"
        placeholder={date}
        className="font-regular w-[8.5rem] border-grey-400 border p-1 px-2 rounded focus:outline-none text-xs text-gray-400 inline text-left space-mono"
        onFocus={(e) => (e.target.type = "date")}
        // onBlur={(e) => (e.target.type = "text")}
        onChange={handleChange}
      />
    </>
  )
}

export default DateInput
