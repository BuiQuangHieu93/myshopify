const Wrapper = ({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="wrapper">
      {title && subtitle && (
        <div className="p-8">
          <div className="flex-center flex-row ">
            <div className="w-[40px] h-[2px] bg-black"></div>
            <div className="pr-8 pl-8 font-bold text-2xl">{title}</div>
            <div className="w-[40px] h-[2px] bg-black"></div>
          </div>
          <div className="flex-center">{subtitle}</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Wrapper;
