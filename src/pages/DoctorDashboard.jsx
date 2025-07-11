import React from "react";
import Card from "../components/Card";
import LineGraphSingle from "../components/LineGraphSingle";
import BarChartComponent from "../components/BarChartComponent";
import NumericCard from "../components/NumericCard";

function DoctorDashboard() {
  const kpi = {
    title: "Active Doctors",
    value: "42",
    period: "Monthly average",
    growth: 1.3,
  };

  const doctorTrend = [
    { label: "Jan", value: 34 },
    { label: "Feb", value: 36 },
    { label: "Mar", value: 39 },
    { label: "Apr", value: 41 },
    { label: "May", value: 42 },
    { label: "Jun", value: 43 },
  ];

  const avgConsultCard = {
    label: "Avg. Consultation Duration",
    number: "22 min",
    icon: "⏱️",
    color: "bg-green-100",
    textColor: "text-green-700",
  };

  const fulfillmentRate = [
    { label: "Cardiology", value: 92 },
    { label: "Neurology", value: 87 },
    { label: "Orthopedics", value: 91 },
    { label: "Pediatrics", value: 89 },
  ];

  const feedbackAverageData = [
    { label: "Jan", value: 4.4 },
    { label: "Feb", value: 4.5 },
    { label: "Mar", value: 4.3 },
    { label: "Apr", value: 4.6 },
    { label: "May", value: 4.7 },
    { label: "Jun", value: 4.5 },
  ];

  const feedbackTable = [
    { doctor: "Dr. Mehta", rating: "4.8", comment: "Excellent and patient-friendly" },
    { doctor: "Dr. Verma", rating: "4.5", comment: "Quick diagnosis, helpful" },
    { doctor: "Dr. Sharma", rating: "4.3", comment: "Good but long wait time" },
    { doctor: "Dr. Kapoor", rating: "4.6", comment: "Empathetic and clear communication" },
  ];

  const cancellationReasons = [
    { label: "No-show", value: 12 },
    { label: "Reschedule", value: 9 },
    { label: "Technical Issue", value: 5 },
    { label: "Emergency", value: 3 },
  ];

  const cancellationTable = [
    { reason: "No-show", count: 12 },
    { reason: "Reschedule", count: 9 },
    { reason: "Technical Issue", count: 5 },
    { reason: "Emergency", count: 3 },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Doctor Dashboard</h2>

        {/* KPI + Consultation Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <Card
            title={kpi.title}
            value={kpi.value}
            period={kpi.period}
            growth={kpi.growth}
          />
          <NumericCard
            label={avgConsultCard.label}
            number={avgConsultCard.number}
            icon={avgConsultCard.icon}
            color={avgConsultCard.color}
            textColor={avgConsultCard.textColor}
          />
        </div>

        {/* Active Count + Fulfillment Rate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <LineGraphSingle
            title="Active Doctor Count Over Time"
            data={doctorTrend}
            xLabel="Month"
            yLabel="Doctors"
          />
          <BarChartComponent
            title="Appointment Fulfillment Rate"
            data={fulfillmentRate}
            xLabel="Department"
            yLabel="Fulfillment (%)"
          />
        </div>

        {/* Feedback Rating + Comments Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <LineGraphSingle
            title="Average Feedback Rating"
            data={feedbackAverageData}
            xLabel="Month"
            yLabel="Rating (out of 5)"
            yDomain={[0, 5]}
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Feedback Table</h3>
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-100 text-gray-600 text-sm font-medium">
                <tr>
                  <th className="px-4 py-3 text-left">Doctor</th>
                  <th className="px-4 py-3 text-left">Rating</th>
                  <th className="px-4 py-3 text-left">Comment</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {feedbackTable.map((entry, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{entry.doctor}</td>
                    <td className="px-4 py-3">{entry.rating}</td>
                    <td className="px-4 py-3">{entry.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cancellations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BarChartComponent
            title="Appointment Cancellation Patterns"
            data={cancellationReasons}
            xLabel="Reason"
            yLabel="Count"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Cancellation Breakdown</h3>
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-100 text-gray-600 text-sm font-medium">
                <tr>
                  <th className="px-4 py-3 text-left">Reason</th>
                  <th className="px-4 py-3 text-left">Count</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {cancellationTable.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{r.reason}</td>
                    <td className="px-4 py-3">{r.count}</td>
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

export default DoctorDashboard;
