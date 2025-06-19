export default function Success({ text, onClose }) {
  return (
    <div className="bg-black/50 fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-50 pt-4 overflow-y-auto hide-scrollbar">
      <div className="bg-dark-blue p-[86px] m-[86px] w-full max-w-[54rem] relative flex flex-col justify-center items-center gap-8">
        <p
          className="heading-1 text-cream absolute top-8 right-8 cursor-pointer"
          onClick={onClose}
        >
          X
        </p>
        <p className="heading-1 text-cream uppercase">
          THANK YOU FOR REACHING OUT!
        </p>
        <p className="body-text text-cream text-center">{text}</p>
      </div>
    </div>
  );
}
