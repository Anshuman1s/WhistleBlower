import React from 'react';

const Dropdown = ({ title, options }) => {
  return (
    <div className="select font-medium  ">
      <select className='h-[3vw] rounded border-2' defaultValue="0" name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((option, index) => (
          <option className='font-medium' key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
