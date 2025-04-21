import Earnings from "./Earnings";
import TodaySales from "./TodaySales";
import TopProducts from "./TopProducts";

const Dashboard = () => {
  return (
    <div className="mt-5">
      <TodaySales />
      <TopProducts />
      <Earnings />
    </div>
  );
};

export default Dashboard;
