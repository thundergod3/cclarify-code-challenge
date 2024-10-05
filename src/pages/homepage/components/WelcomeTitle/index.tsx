const WelcomeTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-primary text-xl font-semibold text-center dark:text-white">
        Hi Keith, welcome to CClarity
      </span>
      <span className="text-primary font-semibold text-[32px] text-center dark:text-white">
        What do you want to write today?
      </span>
    </div>
  );
};

export default WelcomeTitle;
