import "styles/globals.scss"
import type { AppProps } from 'next/app'
import React from "react";

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
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<IData[]>([
    { role: "user", content: "متغییر ها در پایتون مثال بزن" },
    {
      role: "assistant",
      content: "متغیرها در پایتون به شکل زیر تعریف می‌شوند:\n\n```python\nvariable_name = value\n```\nبرای مثال:\n\n```python\nage = 25\nname = \"John\"\nis_student = True\n```\nاین سه متغیر در مثال بالا، به ترتیب شامل سن، نام و وضعیت دانشجویی فردی هستند. مقدار سال تولد در اینجا یک عدد صحیح است، مقدار نام یک رشته (کاراکترهایی که با یکدیگر اشتراک دارند) است، وضعیت دانشجویی یک مقدار منطقی (بلی یا خیر) است."
    },
  ]);

  function handleSubmit() {
    alert("dddd")
  }

  return getLayout(<Component loading={loading} setLoading={setLoading} data={data} setData={setData} handleSubmit={handleSubmit} {...pageProps} />)
}