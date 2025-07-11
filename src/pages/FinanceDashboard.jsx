import React from "react";
import Card from "../components/Card";
import LineGraphSingle from "../components/LineGraphSingle";
import NumericCard from "../components/NumericCard";
import PieChartComponent from "../components/PieChartComponent";
import ColumnChart from "../components/ColumnChart";

function FinanceDashboard() {
  const kpiCards = [
    {
      title: "Monthly Recurring Revenue",
      value: "₹5.8L",
      period: "This month",
      growth: 6.9,
    },
  ];

  const mrrData = [
    { label: "Jan", value: 4.2 },
    { label: "Feb", value: 4.6 },
    { label: "Mar", value: 5.0 },
    { label: "Apr", value: 5.4 },
    { label: "May", value: 5.8 },
    { label: "Jun", value: 6.2 },
  ];

  const avgRevenueCard = {
    label: "Avg. Revenue Per Patient",
    number: "₹1,654",
    icon: "📈",
    color: "bg-indigo-100",
    textColor: "text-indigo-700",
  };

  const paymentMethods = [
    { label: "UPI", value: 42 },
    { label: "Credit Card", value: 27 },
    { label: "Cash", value: 18 },
    { label: "Net Banking", value: 13 },
  ];

  const refundData = [
    { label: "Jan", value: 5 },
    { label: "Feb", value: 3 },
    { label: "Mar", value: 6 },
    { label: "Apr", value: 4 },
    { label: "May", value: 2 },
    { label: "Jun", value: 3 },
  ];

  const expensesData = [
    { label: "Jan", value: 90 },
    { label: "Feb", value: 85 },
    { label: "Mar", value: 92 },
    { label: "Apr", value: 88 },
    { label: "May", value: 84 },
    { label: "Jun", value: 87 },
  ];

  const profitMargins = [
    { label: "Cardiology", value: 42 },
    { label: "Orthopedics", value: 35 },
    { label: "Neurology", value: 38 },
    { label: "Pediatrics", value: 30 },
  ];

  const revenueRegions = [
    { region: "Delhi", revenue: "₹1.3L" },
    { region: "Mumbai", revenue: "₹1.1L" },
    { region: "Bengaluru", revenue: "₹98K" },
    { region: "Hyderabad", revenue: "₹75K" },
    { region: "Chennai", revenue: "₹64K" },
  ];

  const outstandingInvoices = [
    { region: "Delhi", invoices: 12 },
    { region: "Mumbai", invoices: 9 },
    { region: "Bengaluru", invoices: 7 },
    { region: "Hyderabad", invoices: 4 },
    { region: "Chennai", invoices: 3 },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Finance Overview</h2>

        {/* Top Row: KPI + Numeric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <Card
            title={kpiCards[0].title}
            value={kpiCards[0].value}
            period={kpiCards[0].period}
            growth={kpiCards[0].growth}
          />
          <NumericCard
            label={avgRevenueCard.label}
            number={avgRevenueCard.number}
            icon={avgRevenueCard.icon}
            color={avgRevenueCard.color}
            textColor={avgRevenueCard.textColor}
          />
        </div>

        {/* MRR Line + Payments Pie */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <LineGraphSingle
            title="Monthly Recurring Revenue Trend"
            data={mrrData}
            xLabel="Month"
            yLabel="MRR (₹L)"
          />
          <PieChartComponent
            title="Payment Distribution Methods"
            data={paymentMethods}
          />
        </div>

        {/* Refund + Expenses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <LineGraphSingle
            title="Refund Rate Trend"
            data={refundData}
            xLabel="Month"
            yLabel="Refunds (%)"
          />
          <LineGraphSingle
            title="Operating Expenses Overview"
            data={expensesData}
            xLabel="Month"
            yLabel="Expenses (₹K)"
          />
        </div>

        {/* Profit Margin Column Chart */}
        <div className="mb-8">
          <ColumnChart
            title="Profit Margin by Department"
            data={profitMargins}
            xLabel="Profit (%)"
            yLabel="Department"
          />
        </div>

        {/* Tables: Revenue + Invoices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue by Region */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Top Revenue Generating Regions</h3>
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-100 text-gray-600 text-sm font-medium">
                <tr>
                  <th className="px-4 py-3 text-left">Region</th>
                  <th className="px-4 py-3 text-left">Revenue</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {revenueRegions.map((r, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{r.region}</td>
                    <td className="px-4 py-3">{r.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Outstanding Invoices */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Outstanding Invoices</h3>
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-100 text-gray-600 text-sm font-medium">
                <tr>
                  <th className="px-4 py-3 text-left">Region</th>
                  <th className="px-4 py-3 text-left">Pending Invoices</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {outstandingInvoices.map((r, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{r.region}</td>
                    <td className="px-4 py-3">{r.invoices}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinanceDashboard;
