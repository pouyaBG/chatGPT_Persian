import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <div className="w-screen h-screen">
        <p>in the name of god</p>
      </div>
    </>
  );
};

export default DefaultLayout;
