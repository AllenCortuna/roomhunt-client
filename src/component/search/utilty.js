export const Label = ({ text, icon }) => {
  return (
    <>
      <p className="text-gray-500 drop-shadow-sm font-semibold text-[.7rem] inline my-2 space-mono">
        {icon}
        {text}
      </p>
    </>
  );
};

