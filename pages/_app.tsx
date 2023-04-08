import "styles/globals.scss"
import type { AppProps } from 'next/app'
import React, { useMemo } from "react";
import axios from "axios";

interface PageWithLayout {
  getLayout: (page: JSX.Element) => JSX.Element
}

type AppPageProps = AppProps & {
  Component: PageWithLayout
}

interface IData {
  role: string;
  content: string;
}

export default function MyApp({ Component, pageProps }: AppPageProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<IData[]>([]);
  const [result, setResult] = React.useState<IData | null>(null);

  function handleSubmit() {
    const inputElement = document.getElementById("input-promp") as HTMLInputElement;
    if (inputElement !== null) { // Check if the element exists
      const inputElement = document.getElementById("input-promp") as HTMLInputElement;
      const content = inputElement.value;
      setData([...data, { role: "user", content }]);

      inputElement.value = "";
      inputElement.disabled = true;
      setLoading(true)

      let options = {
        method: 'POST',
        url: 'http://localhost:3000/api/gpt',
        headers: { 'Content-Type': 'application/json' },
        data: { messages: [...data, { role: "user", content }] },
      };

      axios.request(options).then(function (response) {
        setLoading(false)
        setResult(response.data.data.choices[0].message)
        inputElement.disabled = false;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }

  useMemo(() => {
    if (result) {
      setData([...data, result]);
    }
  }, [result])

  return getLayout(<Component loading={loading} setLoading={setLoading} data={data} setData={setData} handleSubmit={handleSubmit} {...pageProps} />)
}

