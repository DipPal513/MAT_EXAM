import Banner from "@/components/banner/Banner";
import InfoPage from "@/components/info/InfoPage";
import AllCoursesPage from "./courses/page";
import Why_choose from "@/components/why/Why_choose";

export default function Home() {
  return (
    <>
    <Banner />
    <AllCoursesPage />
    <Why_choose />
    <InfoPage />
    </>
  );
}
