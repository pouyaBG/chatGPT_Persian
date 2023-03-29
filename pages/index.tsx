import { ReactElement } from "react";
import DefaultLayout from "../components/layout/default.leyout";
function HomePage() {
  return (
    <>
    <p>dddd</p>
    </>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};