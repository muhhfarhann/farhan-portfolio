interface Parameter {
  click: boolean;
  handleClick: () => void;
}

// humburger button
export default function MenuButton({ click, handleClick }: Parameter) {
  return (
    <>
      <div
        className={`w-[35px] h-[35px] ml-2.5 p-1 flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-center sm:hidden cursor-pointer border-[1px] border-slate-300 rounded-2xl transition-discrete duration-300 ease-in-out hover:shadow-sm shadow-slate-700 group ${
          click ? 'hamburger-active' : ''
        }`}
        id="hamburger"
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center">
          <span className="hamburger-line origin-top-left transition duration-500 ease-in-out"></span>
          <span className="hamburger-line transition duration-100 ease-in-out"></span>
          <span className="hamburger-line origin-bottom-left transition duration-500 ease-in-out"></span>
        </div>
        <p className="font-normal text-[.5rem]">Menu</p>
      </div>
    </>
  );
}
