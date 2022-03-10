import React from "react";
import Featuredinfo from "../../components/featured-info/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import "./Home.css";
import WidgetSmall from "../../components/widget-small/WidgetSmall";
import WidgetLarge from "../../widget-large/WidgetLarge";

const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
