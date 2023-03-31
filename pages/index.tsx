import axios from "axios";
import DefaultLayout from "components/layout/default.leyout";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function HomePage() {

  const [text, setText] = useState("");

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/completions', {
          messages: [{ role: 'user', content: 'متغییر ها در پایتون مثال بزن' }]
        }, {
          headers: {
            responseType: 'stream'
          }
        });

        console.log(response.data.choices[0].message.content);
        setText(response.data.choices[0].message.content);

      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

  }, []);;

  return (
    <>
      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page: any) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
