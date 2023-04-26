function App() {
  return (
    <div className="w-full min-h-screen bg-[--light-gray] grid place-items-center">
      <div className="bg-white p-4 w-80 rounded-[20px] shadow-[0_25px_25px_rgba(0,0,0,0.047)]">
        <div className="aspect-square rounded-[12px] overflow-hidden">
          <img src="image-qr-code.png" alt="image-qr-code" />
        </div>
        <div className="py-6 px-2 text-center">
          <h1 className="text-[22px] leading-[27.7px] font-bold  text-[--dark-blue]">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[15px] leading-[18.9px] tracking-[0.19px] text-[--grayish-blue] mt-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
