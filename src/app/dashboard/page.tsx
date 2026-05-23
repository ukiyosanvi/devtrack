import ContributionGraph from "@/components/ContributionGraph";
import ContributionHeatmap from "@/components/ContributionHeatmap";
import QuickMetricsCharts from "@/components/QuickMetricsCharts"; // 🌟 Your triple micro-charts component
import PRMetrics from "@/components/PRMetrics";
import PRBreakdownChart from "@/components/PRBreakdownChart";
import GoalTracker from "@/components/GoalTracker";
import DashboardHeader from "@/components/DashboardHeader";
import StreakTracker from "@/components/StreakTracker";
import TopRepos from "@/components/TopRepos";
import PinnedRepos from "@/components/PinnedRepos";
import LanguageBreakdown from "@/components/LanguageBreakdown";
import CommitTimeChart from "@/components/CommitTimeChart";
import IssueMetrics from "@/components/IssueMetrics";
import StreakAtRiskBanner from "@/components/StreakAtRiskBanner";
import FriendComparison from "@/components/FriendComparison";
import WeeklySummaryCard from "@/components/WeeklySummaryCard";
import ExportButton from "@/components/ExportButton";
import PersonalRecords from "@/components/PersonalRecords";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[var(--background)] p-4 md:p-8 text-[var(--foreground)] transition-colors">
      <DashboardHeader />
      <div className="mb-6 flex justify-end">
        <ExportButton />
      </div>
      <StreakAtRiskBanner />

      <WeeklySummaryCard />

      <div className="mb-6">
        <PersonalRecords />
      </div>

      {/* Row 1: Contribution graph + Heatmap + Friend Comparison + Quick Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Spans 2 columns) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <ContributionGraph />
          <ContributionHeatmap />
          
          {/* Grouped container so QuickMetricsCharts sits perfectly below Friend Comparison on the left */}
          <div className="flex flex-col gap-6">
            <FriendComparison />
            {/* 🎯 Injected here: Sits exactly below Friend Comparison and directly above Row 2 (PR Analytics) */}
            <QuickMetricsCharts />
          </div>
        </div>

        {/* Right Column (Spans 1 column) - Kept completely original */}
        <div className="flex flex-col gap-6">
          <StreakTracker />
        </div>
      </div>

      {/* Row 2: PR metrics, PR breakdown & Time Chart (Directly below your new charts!) */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PRMetrics />
        <PRBreakdownChart />
        <CommitTimeChart />
      </div>

      {/* Row 3: Issue metrics */}
      <div className="mt-6">
        <IssueMetrics />
      </div>

      {/* Row 4: Pinned repositories */}
      <div className="mt-6">
        <PinnedRepos />
      </div>

      {/* Row 5: Top repos + Language breakdown + Goal tracker */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopRepos />
        <LanguageBreakdown />
        <GoalTracker />
      </div>
    </div>
  );
}