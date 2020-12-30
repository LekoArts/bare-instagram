import * as React from 'react'

const Checkbox = ({ name, checked, onChange, desc }) => (
  <label
    htmlFor={name}
    className="flex flex-row flex-nowrap justify-between"
    style={{ cursor: 'pointer' }}
  >
    <span>{desc}</span>
    <input
      type="checkbox"
      className="appearance-none h-6 w-6 bg-gray-200 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md checked:bg-green-600 checked:border-transparent focus:outline-none cursor-pointer"
      name={name}
      checked={checked}
      onChange={onChange}
    />
  </label>
)

export default Checkbox
