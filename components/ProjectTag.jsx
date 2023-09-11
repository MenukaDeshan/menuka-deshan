import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-#f9f9f9 border-primary-500"
    : "text-[#7a05ff] hover:text-#ffffff";
  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-3 text-xl`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
