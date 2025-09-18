// import React, { useState } from 'react';
// import './Dropdown.css';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('Select an option');

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   return (
//     <div className="dropdown">
//       <button className="dropdown-toggle" onClick={toggleDropdown}>
//         {selectedOption}
//       </button>
//       {isOpen && (
//         <ul className="dropdown-menu">
//           {options.map((option, index) => (
//             <li key={index} onClick={() => handleOptionClick(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;



export const sofaBanner = {
  title: 'sofa',
  image: './Logos/poster.png', // replace with actual image URL
};
