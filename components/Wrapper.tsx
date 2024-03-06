import { Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const WrapperContainer = ({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="wrapper flex-wrap">
      {title && subtitle && (
        <div className={`p-8 ${libre.className}`}>
          <div className="flex-center flex-row ">
            <div className="w-[40px] h-[2px] bg-black"></div>
            <div className="pr-8 pl-8 font-bold text-2xl">{title}</div>
            <div className="w-[40px] h-[2px] bg-black"></div>
          </div>
          <div className="flex-center italic">{subtitle}</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default WrapperContainer;
