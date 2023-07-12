import React from "react";
import MarketingCampaign from "../components/MarketingCampaign";
import CampaignTable from "../components/CampaignTable";
import CardBox from "../components/CardBox";

const Dashboard = () => {
  return (
    <>
      <MarketingCampaign />
      <CampaignTable />
      <CardBox />
    </>
  );
};

export default Dashboard;
