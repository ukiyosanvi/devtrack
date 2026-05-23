"use client";

import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function QuickMetricsCharts() {
  // 🎯 State trackers for active interactive slices
  const [activeCommitSlice, setActiveCommitSlice] = useState<number | null>(null);
  const [activeTestSlice, setActiveTestSlice] = useState<number | null>(null);
  const [activeCollabSlice, setActiveCollabSlice] = useState<number | null>(null);

  // 📊 Cleaned data arrays with short labels to prevent circle text overflow
  const commitTypeData = [
    { name: "Features", value: 28, color: "#4f46e5", percent: "72%" }, 
    { name: "Fixes", value: 11, color: "#ef4444", percent: "28%" }, 
  ];

  const testCoverageData = [
    { name: "Tested", value: 85, color: "#10b981", percent: "85%" }, 
    { name: "Unchecked", value: 15, color: "#e2e8f0", percent: "15%" }, 
  ];

  const collabSplitData = [
    { name: "Forks", value: 3, color: "#f59e0b", percent: "75%" }, 
    { name: "Own Repos", value: 1, color: "#3b82f6", percent: "25%" }, 
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm mt-6 transition-all dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight mb-4 text-left">
        Quick Analytics Overview
      </h3>

      <div className="grid grid-cols-3 gap-4 items-center text-center">
        
        {/* 📈 Chart 1: Commit Types */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-24 w-24 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={commitTypeData}
                  innerRadius={28}
                  outerRadius={38}
                  paddingAngle={2}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveCommitSlice(index)}
                  onMouseLeave={() => setActiveCommitSlice(null)}
                  onClick={(_, index) => setActiveCommitSlice(index)}
                >
                  {commitTypeData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      style={{
                        transform: activeCommitSlice === index ? 'scale(1.06)' : 'scale(1)',
                        transformOrigin: 'center',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* Dynamic Center Text Block */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs font-bold text-slate-900 dark:text-white transition-all">
                {activeCommitSlice !== null ? commitTypeData[activeCommitSlice].percent : "39"}
              </span>
              <span className="text-[8px] text-slate-400 uppercase tracking-wider font-medium truncate max-w-[55px]">
                {activeCommitSlice !== null ? commitTypeData[activeCommitSlice].name : "Total"}
              </span>
            </div>
          </div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 block">
            Commit Types
          </span>
        </div>

        {/* 🧪 Chart 2: Test Coverage */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-24 w-24 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={testCoverageData}
                  innerRadius={28}
                  outerRadius={38}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  onMouseEnter={(_, index) => setActiveTestSlice(index)}
                  onMouseLeave={() => setActiveTestSlice(null)}
                  onClick={(_, index) => setActiveTestSlice(index)}
                >
                  {testCoverageData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      style={{
                        transform: activeTestSlice === index ? 'scale(1.06)' : 'scale(1)',
                        transformOrigin: 'center',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs font-bold text-slate-900 dark:text-white transition-all">
                {activeTestSlice !== null ? testCoverageData[activeTestSlice].percent : "85%"}
              </span>
              <span className="text-[8px] text-slate-400 uppercase tracking-wider font-medium truncate max-w-[55px]">
                {activeTestSlice !== null ? testCoverageData[activeTestSlice].name : "Jasmine"}
              </span>
            </div>
          </div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 block">
            Test Coverage
          </span>
        </div>

        {/* 👥 Chart 3: Collaboration Split */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-24 w-24 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={collabSplitData}
                  innerRadius={28}
                  outerRadius={38}
                  paddingAngle={2}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveCollabSlice(index)}
                  onMouseLeave={() => setActiveCollabSlice(null)}
                  onClick={(_, index) => setActiveCollabSlice(index)}
                >
                  {collabSplitData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      style={{
                        transform: activeCollabSlice === index ? 'scale(1.06)' : 'scale(1)',
                        transformOrigin: 'center',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs font-bold text-slate-900 dark:text-white transition-all">
                {activeCollabSlice !== null ? collabSplitData[activeCollabSlice].percent : "4"}
              </span>
              <span className="text-[8px] text-slate-400 uppercase tracking-wider font-medium truncate max-w-[55px]">
                {activeCollabSlice !== null ? collabSplitData[activeCollabSlice].name : "Active"}
              </span>
            </div>
          </div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 block">
            Collab Split
          </span>
        </div>

      </div>
    </div>
  );
}