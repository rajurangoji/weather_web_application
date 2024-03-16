import React, { useState, useEffect, memo } from 'react';

function Location(props) {
  const { searchData } = props;
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const year = currentDate.getFullYear();
    const formatted = `${day}/${month}/${year}`;
    setFormattedDate(formatted);
  }, []); // Run effect only once on component mount


  // Check if searchData is defined and not null
  if (!searchData) {
    return <div></div>;
  }

  // Check if searchData.name is defined
  if (!searchData.name) {
    return <div className='location-container'>Location not found</div>;
  }

  return (
    <div className='location-container'>
      <div>{searchData.name}</div>
      <p>{formattedDate}</p>
    </div>
  );
}

export default memo(Location);
