import axios from "axios";
import React from "react";
import DefaultLayout from "components/layout/default.leyout";
import { log } from "console";
import { use, useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Readable } from "stream";

interface IData {
  role: string;
  content: string;
}

interface HomePageProps {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  loading: boolean;
}

interface HomePageType extends React.FC<HomePageProps> {
  getLayout?: (Component: React.ReactNode) => JSX.Element;
}

type DefaultLayoutProps = {
  setData?: () => void;
};



const HomePage: HomePageType = ({ data, loading }) => {

  return (
    <>
      {
        data.map((item, n) => {
          if (item.role === "user") {
            return (
              <div key={n} className="flex items-start bg-[#0000000f] p-4 rounded-[24px] mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_157_121)">
                    <path d="M22 12C22 13.5913 21.3679 15.1174 20.2426 16.2426C19.1174 17.3679 17.5913 18 16 18C14.4087 18 12.8826 17.3679 11.7574 16.2426C10.6321 15.1174 10 13.5913 10 12C10 10.4087 10.6321 8.88258 11.7574 7.75736C12.8826 6.63214 14.4087 6 16 6C17.5913 6 19.1174 6.63214 20.2426 7.75736C21.3679 8.88258 22 10.4087 22 12Z" fill="#070030" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16ZM16 2C13.3636 2.00014 10.7807 2.74473 8.54881 4.14806C6.31688 5.55139 4.52657 7.55642 3.38393 9.93239C2.24129 12.3084 1.79277 14.9587 2.09 17.5783C2.38722 20.198 3.41811 22.6804 5.064 24.74C6.484 22.452 9.61 20 16 20C22.39 20 25.514 22.45 26.936 24.74C28.5819 22.6804 29.6128 20.198 29.91 17.5783C30.2072 14.9587 29.7587 12.3084 28.6161 9.93239C27.4734 7.55642 25.6831 5.55139 23.4512 4.14806C21.2193 2.74473 18.6364 2.00014 16 2Z" fill="#070030" />
                  </g>
                  <defs>
                    <clipPath id="clip0_157_121">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <ReactMarkdown
                  className="mx-3"
                  children={item.content}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children)}
                          language={match[1]}
                          PreTag="pre"
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      )
                    }
                  }}
                />
              </div>
            )
          } else {
            return (
              <>
                <div key={n} className="flex items-start bg-[#fff4] p-4 rounded-[24px] mb-4 border-[3px] border-[#fff] shadow-2xl shadow-[#fff]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0001 24.9999C12.0001 24.7347 12.1054 24.4803 12.293 24.2928C12.4805 24.1053 12.7349 23.9999 13.0001 23.9999H19.0001C19.2653 23.9999 19.5196 24.1053 19.7072 24.2928C19.8947 24.4803 20.0001 24.7347 20.0001 24.9999C20.0001 25.2651 19.8947 25.5195 19.7072 25.707C19.5196 25.8945 19.2653 25.9999 19.0001 25.9999H13.0001C12.7349 25.9999 12.4805 25.8945 12.293 25.707C12.1054 25.5195 12.0001 25.2651 12.0001 24.9999ZM6.00007 16.1239C6.00007 13.5199 8.47007 11.5299 11.0601 11.7719C14.3463 12.0786 17.6539 12.0786 20.9401 11.7719C23.5301 11.5299 26.0001 13.5199 26.0001 16.1239V18.4379C26.0082 18.8804 25.8589 19.3114 25.5786 19.654C25.2983 19.9965 24.9054 20.2283 24.4701 20.3079C22.7801 20.6019 19.7901 20.9999 16.0001 20.9999C12.2101 20.9999 9.22007 20.5999 7.53007 20.3079C7.09471 20.2283 6.70181 19.9965 6.42155 19.654C6.14129 19.3114 5.9919 18.8804 6.00007 18.4379V16.1239ZM15.0841 14.4699C15.0061 14.4566 14.9262 14.4621 14.8507 14.4857C14.7753 14.5093 14.7065 14.5505 14.6501 14.6059L12.8101 16.4059C11.5586 16.3313 10.3103 16.2092 9.06807 16.0399C8.93934 16.0271 8.81067 16.0647 8.70908 16.1448C8.60749 16.2249 8.54089 16.3412 8.52329 16.4694C8.50568 16.5976 8.53843 16.7276 8.61466 16.8321C8.69089 16.9366 8.80466 17.0075 8.93207 17.0299C10.0321 17.1819 11.3961 17.3279 12.9721 17.4159C13.0415 17.4198 13.111 17.4092 13.176 17.3848C13.2411 17.3603 13.3004 17.3225 13.3501 17.2739L14.8581 15.8019L16.5521 19.2219C16.5878 19.2936 16.6402 19.3558 16.7049 19.403C16.7696 19.4503 16.8447 19.4813 16.9239 19.4935C17.0031 19.5056 17.0841 19.4985 17.16 19.4729C17.2359 19.4472 17.3045 19.4036 17.3601 19.3459L19.2241 17.4059C20.5097 17.3296 21.792 17.2041 23.0681 17.0299C23.1955 17.0075 23.3093 16.9366 23.3855 16.8321C23.4617 16.7276 23.4945 16.5976 23.4769 16.4694C23.4593 16.3412 23.3927 16.2249 23.2911 16.1448C23.1895 16.0647 23.0608 16.0271 22.9321 16.0399C21.8561 16.1879 20.5181 16.3299 18.9721 16.4179C18.8462 16.4249 18.7276 16.4792 18.6401 16.5699L17.1321 18.1399L15.4481 14.7399C15.413 14.6694 15.3617 14.6082 15.2984 14.5613C15.2352 14.5144 15.1617 14.4831 15.0841 14.4699Z" fill="black" />
                    <path d="M17 3.73205C17.3813 3.51192 17.6793 3.17212 17.8478 2.76537C18.0162 2.35861 18.0458 1.90763 17.9319 1.48236C17.8179 1.0571 17.5668 0.681312 17.2175 0.413293C16.8682 0.145275 16.4403 0 16 0C15.5597 0 15.1318 0.145275 14.7825 0.413293C14.4332 0.681312 14.1821 1.0571 14.0681 1.48236C13.9542 1.90763 13.9838 2.35861 14.1522 2.76537C14.3207 3.17212 14.6187 3.51192 15 3.73205V6.00005H11C8.61305 6.00005 6.32387 6.94826 4.63604 8.63609C2.94821 10.3239 2 12.6131 2 15.0001V16.0001C1.46957 16.0001 0.960859 16.2108 0.585786 16.5858C0.210714 16.9609 0 17.4696 0 18.0001L0 22.0001C0 22.5305 0.210714 23.0392 0.585786 23.4143C0.960859 23.7893 1.46957 24.0001 2 24.0001V26.0001C2 27.0609 2.42143 28.0783 3.17157 28.8285C3.92172 29.5786 4.93913 30.0001 6 30.0001H26C27.0609 30.0001 28.0783 29.5786 28.8284 28.8285C29.5786 28.0783 30 27.0609 30 26.0001V24.0001C30.5304 24.0001 31.0391 23.7893 31.4142 23.4143C31.7893 23.0392 32 22.5305 32 22.0001V18.0001C32 17.4696 31.7893 16.9609 31.4142 16.5858C31.0391 16.2108 30.5304 16.0001 30 16.0001V15.0001C30 12.6131 29.0518 10.3239 27.364 8.63609C25.6761 6.94826 23.3869 6.00005 21 6.00005H17V3.73205ZM28 15.0001V26.0001C28 26.5305 27.7893 27.0392 27.4142 27.4143C27.0391 27.7893 26.5304 28.0001 26 28.0001H6C5.46957 28.0001 4.96086 27.7893 4.58579 27.4143C4.21071 27.0392 4 26.5305 4 26.0001V15.0001C4 13.1435 4.7375 11.3631 6.05025 10.0503C7.36301 8.73755 9.14348 8.00005 11 8.00005H21C22.8565 8.00005 24.637 8.73755 25.9497 10.0503C27.2625 11.3631 28 13.1435 28 15.0001Z" fill="black" />
                  </svg>
                  <ReactMarkdown
                    className="mx-3"
                    children={item.content}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children)}
                            language={match[1]}
                            PreTag="pre"
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        )
                      }
                    }}
                  />

                </div>
              </>

            )
          }
        })
      }
      {
        loading ?
          <div className="flex items-start bg-[#0000000f] p-4 px-6 pl-16 rounded-[24px] mb-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0001 24.9999C12.0001 24.7347 12.1054 24.4803 12.293 24.2928C12.4805 24.1053 12.7349 23.9999 13.0001 23.9999H19.0001C19.2653 23.9999 19.5196 24.1053 19.7072 24.2928C19.8947 24.4803 20.0001 24.7347 20.0001 24.9999C20.0001 25.2651 19.8947 25.5195 19.7072 25.707C19.5196 25.8945 19.2653 25.9999 19.0001 25.9999H13.0001C12.7349 25.9999 12.4805 25.8945 12.293 25.707C12.1054 25.5195 12.0001 25.2651 12.0001 24.9999ZM6.00007 16.1239C6.00007 13.5199 8.47007 11.5299 11.0601 11.7719C14.3463 12.0786 17.6539 12.0786 20.9401 11.7719C23.5301 11.5299 26.0001 13.5199 26.0001 16.1239V18.4379C26.0082 18.8804 25.8589 19.3114 25.5786 19.654C25.2983 19.9965 24.9054 20.2283 24.4701 20.3079C22.7801 20.6019 19.7901 20.9999 16.0001 20.9999C12.2101 20.9999 9.22007 20.5999 7.53007 20.3079C7.09471 20.2283 6.70181 19.9965 6.42155 19.654C6.14129 19.3114 5.9919 18.8804 6.00007 18.4379V16.1239ZM15.0841 14.4699C15.0061 14.4566 14.9262 14.4621 14.8507 14.4857C14.7753 14.5093 14.7065 14.5505 14.6501 14.6059L12.8101 16.4059C11.5586 16.3313 10.3103 16.2092 9.06807 16.0399C8.93934 16.0271 8.81067 16.0647 8.70908 16.1448C8.60749 16.2249 8.54089 16.3412 8.52329 16.4694C8.50568 16.5976 8.53843 16.7276 8.61466 16.8321C8.69089 16.9366 8.80466 17.0075 8.93207 17.0299C10.0321 17.1819 11.3961 17.3279 12.9721 17.4159C13.0415 17.4198 13.111 17.4092 13.176 17.3848C13.2411 17.3603 13.3004 17.3225 13.3501 17.2739L14.8581 15.8019L16.5521 19.2219C16.5878 19.2936 16.6402 19.3558 16.7049 19.403C16.7696 19.4503 16.8447 19.4813 16.9239 19.4935C17.0031 19.5056 17.0841 19.4985 17.16 19.4729C17.2359 19.4472 17.3045 19.4036 17.3601 19.3459L19.2241 17.4059C20.5097 17.3296 21.792 17.2041 23.0681 17.0299C23.1955 17.0075 23.3093 16.9366 23.3855 16.8321C23.4617 16.7276 23.4945 16.5976 23.4769 16.4694C23.4593 16.3412 23.3927 16.2249 23.2911 16.1448C23.1895 16.0647 23.0608 16.0271 22.9321 16.0399C21.8561 16.1879 20.5181 16.3299 18.9721 16.4179C18.8462 16.4249 18.7276 16.4792 18.6401 16.5699L17.1321 18.1399L15.4481 14.7399C15.413 14.6694 15.3617 14.6082 15.2984 14.5613C15.2352 14.5144 15.1617 14.4831 15.0841 14.4699Z" fill="black" />
              <path d="M17 3.73205C17.3813 3.51192 17.6793 3.17212 17.8478 2.76537C18.0162 2.35861 18.0458 1.90763 17.9319 1.48236C17.8179 1.0571 17.5668 0.681312 17.2175 0.413293C16.8682 0.145275 16.4403 0 16 0C15.5597 0 15.1318 0.145275 14.7825 0.413293C14.4332 0.681312 14.1821 1.0571 14.0681 1.48236C13.9542 1.90763 13.9838 2.35861 14.1522 2.76537C14.3207 3.17212 14.6187 3.51192 15 3.73205V6.00005H11C8.61305 6.00005 6.32387 6.94826 4.63604 8.63609C2.94821 10.3239 2 12.6131 2 15.0001V16.0001C1.46957 16.0001 0.960859 16.2108 0.585786 16.5858C0.210714 16.9609 0 17.4696 0 18.0001L0 22.0001C0 22.5305 0.210714 23.0392 0.585786 23.4143C0.960859 23.7893 1.46957 24.0001 2 24.0001V26.0001C2 27.0609 2.42143 28.0783 3.17157 28.8285C3.92172 29.5786 4.93913 30.0001 6 30.0001H26C27.0609 30.0001 28.0783 29.5786 28.8284 28.8285C29.5786 28.0783 30 27.0609 30 26.0001V24.0001C30.5304 24.0001 31.0391 23.7893 31.4142 23.4143C31.7893 23.0392 32 22.5305 32 22.0001V18.0001C32 17.4696 31.7893 16.9609 31.4142 16.5858C31.0391 16.2108 30.5304 16.0001 30 16.0001V15.0001C30 12.6131 29.0518 10.3239 27.364 8.63609C25.6761 6.94826 23.3869 6.00005 21 6.00005H17V3.73205ZM28 15.0001V26.0001C28 26.5305 27.7893 27.0392 27.4142 27.4143C27.0391 27.7893 26.5304 28.0001 26 28.0001H6C5.46957 28.0001 4.96086 27.7893 4.58579 27.4143C4.21071 27.0392 4 26.5305 4 26.0001V15.0001C4 13.1435 4.7375 11.3631 6.05025 10.0503C7.36301 8.73755 9.14348 8.00005 11 8.00005H21C22.8565 8.00005 24.637 8.73755 25.9497 10.0503C27.2625 11.3631 28 13.1435 28 15.0001Z" fill="black" />
            </svg>
            <div className="w-full">
              <div className="flex items-center mr-12 w-full">
                <div className="load mt-2">
                  <div className="progress"></div>
                  <div className="progress"></div>
                  <div className="progress"></div>
                </div>
              </div>
            </div>
          </div>
          : null
      }
    </>
  );
}

export default HomePage;
// Declare getLayout function separately
export const getLayout = (page: any) => {
  return <DefaultLayout setData={() => null}>{page}</DefaultLayout>;
};
// Attach getLayout to HomePage component
HomePage.getLayout = getLayout;
