const ActionLink = ({ text, onClick }) => {
  return (
    <div className="text-base text-slate-500">
      <button
        onClick={onClick}
        className="hover:text-slate-600 transition-colors"
      >
        {text}
      </button>
      <div className="shrink-0 mt-2 border-2 border-solid border-slate-500 h-[3px]" />
    </div>
  );
};

export default ActionLink;
