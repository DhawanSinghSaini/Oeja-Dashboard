import React from "react";
import Card from "../components/Card";
import NumericCard from "../components/NumericCard";
import LineGraphSingle from "../components/LineGraphSingle";
import BarChartComponent from "../components/BarChartComponent";
import FunnelChart from "../components/FunnelChart";
import GaugeChart from "../components/GaugeChart";

function EngagementDashboard() {
  const newAccounts = {
    title: "New Customer Accounts",
    value: "1,845",
    period: "This month",
    growth: 7.2,
  };

  const arpuCard = {
    label: "ARPU (Avg. Revenue Per User)",
    number: "₹1,182",
    icon: "💰",
    color: "bg-yellow-100",
    textColor: "text-yellow-700",
  };

  const activationFunnel = [
    { label: "Site Visit", value: 8200 },
    { label: "Account Created", value: 3600 },
    { label: "Activated", value: 2300 },
  ];

  const dailyUsers = [
    { label: "Mon", value: 540 },
    { label: "Tue", value: 610 },
    { label: "Wed", value: 580 },
    { label: "Thu", value: 670 },
    { label: "Fri", value: 720 },
    { label: "Sat", value: 690 },
    { label: "Sun", value: 620 },
  ];

  const monthlyUsers = [
    { label: "Jan", value: 4200 },
    { label: "Feb", value: 4620 },
    { label: "Mar", value: 5050 },
    { label: "Apr", value: 5420 },
    { label: "May", value: 5810 },
    { label: "Jun", value: 6120 },
  ];

  const engagementRate = [
    { label: "Delhi", value: 88 },
    { label: "Mumbai", value: 85 },
    { label: "Bengaluru", value: 82 },
    { label: "Hyderabad", value: 80 },
  ];

  const satisfactionScore = 4.5;

  const satisfactionCards = [
    { label: "Support Experience", score: "4.7" },
    { label: "Ease of Use", score: "4.6" },
    { label: "Feature Satisfaction", score: "4.4" },
  ];

  const churnRate = [
    { label: "Jan", value: 8 },
    { label: "Feb", value: 7.2 },
    { label: "Mar", value: 6.5 },
    { label: "Apr", value: 6.9 },
    { label: "May", value: 6.2 },
    { label: "Jun", value: 5.8 },
  ];

  const retentionRate = [
    { label: "Jan", value: 58 },
    { label: "Feb", value: 62 },
    { label: "Mar", value: 67 },
    { label: "Apr", value: 71 },
    { label: "May", value: 73 },
    { label: "Jun", value: 75 },
  ];

  const arpuTrend = [
    { label: "Jan", value: 1025 },
    { label: "Feb", value: 1090 },
    { label: "Mar", value: 1154 },
    { label: "Apr", value: 1185 },
    { label: "May", value: 1200 },
    { label: "Jun", value: 1182 },
  ];

  const customerGrowth = [
    { label: "Jan", value: 1280 },
    { label: "Feb", value: 1422 },
    { label: "Mar", value: 1570 },
    { label: "Apr", value: 1705 },
    { label: "May", value: 1845 },
    { label: "Jun", value: 1980 },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Engagement Dashboard</h2>

        {/* Top: KPI + ARPU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <Card
            title={newAccounts.title}
            value={newAccounts.value}
            period={newAccounts.period}
            growth={newAccounts.growth}
          />
          <NumericCard
            label={arpuCard.label}
            number={arpuCard.number}
            icon={arpuCard.icon}
            color={arpuCard.color}
            textColor={arpuCard.textColor}
          />
        </div>

        {/* Active Users Line Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <LineGraphSingle
            title="Daily Active Users"
            data={dailyUsers}
            xLabel="Day"
            yLabel="Users"
          />
          <LineGraphSingle
            title="Monthly Active Users"
            data={monthlyUsers}
            xLabel="Month"
            yLabel="Users"
          />
        </div>

        {/* Funnel + Engagement Rate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <FunnelChart
            title="Activation Funnel"
            data={activationFunnel}
            xLabel="Stage"
            yLabel="Users"
          />
          <BarChartComponent
            title="Engagement Rate"
            data={engagementRate}
            xLabel="City"
            yLabel="Engagement (%)"
          />
        </div>

        {/* Satisfaction Scores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GaugeChart
            title="Overall Satisfaction"
            value={satisfactionScore}
            max={5}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {satisfactionCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-4 text-center border border-gray-200"
              >
                <h4 className="text-lg font-medium text-gray-800">{card.label}</h4>
                <p className="text-2xl font-bold text-indigo-600">{card.score} / 5</p>
              </div>
            ))}
          </div>
        </div>

        {/* Churn Rate + Retention Rate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <LineGraphSingle
            title="Churn Rate Over Time"
            data={churnRate}
            xLabel="Month"
            yLabel="Churn (%)"
          />
          <BarChartComponent
            title="Monthly Retention Rate"
            data={retentionRate}
            xLabel="Month"
            yLabel="Retention (%)"
          />
        </div>

        {/* ARPU Trend + Customer Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LineGraphSingle
            title="Average Revenue Per User (ARPU)"
            data={arpuTrend}
            xLabel="Month"
            yLabel="₹"
          />
          <BarChartComponent
            title="New Customer Growth Trend"
            data={customerGrowth}
            xLabel="Month"
            yLabel="Accounts"
          />
        </div>
      </div>
    </div>
  );
}

export default EngagementDashboard;
