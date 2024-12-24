import { ReactElement } from "react";

type CardProps = {
  children?: ReactElement;
  headerText?: string;
};

export const Card = ({ children, headerText }: CardProps) => {
  return (
    <div className="flex flex-col border-container border-[3px] rounded-[5px] py-5 gap-3">
      {headerText && (
        <div className="flex items-center gap-2">
          <div className="w-12 h-6 bg-sectionHeader"></div>
          <span className=" text-center text-2xl">{headerText}</span>
          <div className="flex-1 h-6 content-none bg-sectionHeader"></div>
        </div>
      )}
      {children}
    </div>
  );
};
