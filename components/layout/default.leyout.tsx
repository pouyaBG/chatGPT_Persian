import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <div className="h-screen">
        <div className="flex items-center">
          <div className="text-white bg-[#070030] w-[15%] h-screen rounded-e-[30px] flex flex-col items-center justify-between">
            {/* button */}
            <div className="flex mt-6 justify-between w-[90%] border-2 rounded-lg border-white p-3 cursor-pointer ">
              <span>چت جدید</span>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2953 19.0025H0V15.5479H15.2953V19.0025ZM9.55199 2.75721L12.7907 5.9959L4.966 13.8206H1.7273V10.5819L9.55199 2.75721ZM13.7148 5.0718L10.4761 1.8331L12.0566 0.252618C12.3934 -0.0842061 12.9375 -0.0842061 13.2743 0.252618L15.2953 2.27356C15.6321 2.61039 15.6321 3.15449 15.2953 3.49131L13.7148 5.0718Z" fill="#EEEEEE" />
              </svg>
            </div>
            <div>sdf</div>
            <div>sdf</div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
