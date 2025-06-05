
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SolidarityHeader from "@/components/SolidarityHeader";
import SolidarityFooter from "@/components/SolidarityFooter";
import { Users, MessageSquare, Clock, TrendingUp, Calendar, Shield, Heart, Handshake } from "lucide-react";

const Admin = () => {
  // Mock data - in a real app this would come from your backend
  const stats = {
    totalChats: 1247,
    activeVolunteers: 23,
    hoursSupported: 3186,
    weeklyGrowth: 12.5,
    avgResponseTime: "4.2 min",
    chatsSolved: 892,
    upcomingShifts: 15,
    trainingCompleted: 87
  };

  return (
    <div className="min-h-screen bg-white">
      <SolidarityHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-solidarity-black mb-2">
            Admin Dashboard
          </h1>
          <p className="text-solidarity-gray-warm">
            Solidarity Line Operations & Impact Metrics
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-solidarity-red">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Support Chats</CardTitle>
              <MessageSquare className="h-4 w-4 text-solidarity-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-solidarity-black">{stats.totalChats.toLocaleString()}</div>
              <p className="text-xs text-solidarity-gray-warm">Workers supported this year</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-solidarity-red">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Volunteers</CardTitle>
              <Users className="h-4 w-4 text-solidarity-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-solidarity-black">{stats.activeVolunteers}</div>
              <p className="text-xs text-solidarity-gray-warm">Available for support shifts</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-solidarity-red">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Support Hours</CardTitle>
              <Clock className="h-4 w-4 text-solidarity-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-solidarity-black">{stats.hoursSupported.toLocaleString()}</div>
              <p className="text-xs text-solidarity-gray-warm">Total volunteer hours logged</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-solidarity-red">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-solidarity-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-solidarity-black">+{stats.weeklyGrowth}%</div>
              <p className="text-xs text-solidarity-gray-warm">New workers reaching out</p>
            </CardContent>
          </Card>
        </div>

        {/* Operational Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-solidarity-red" />
                Support Quality Metrics
              </CardTitle>
              <CardDescription>How we're serving our comrades</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Average Response Time</span>
                <span className="text-lg font-bold text-solidarity-red">{stats.avgResponseTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Chats Resolved</span>
                <span className="text-lg font-bold text-solidarity-red">{stats.chatsSolved}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Success Rate</span>
                <span className="text-lg font-bold text-solidarity-red">
                  {Math.round((stats.chatsSolved / stats.totalChats) * 100)}%
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Handshake className="h-5 w-5 text-solidarity-red" />
                Volunteer Operations
              </CardTitle>
              <CardDescription>Building worker solidarity capacity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Upcoming Shifts</span>
                <span className="text-lg font-bold text-solidarity-red">{stats.upcomingShifts}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Training Completed</span>
                <span className="text-lg font-bold text-solidarity-red">{stats.trainingCompleted}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Avg Hours/Volunteer</span>
                <span className="text-lg font-bold text-solidarity-red">
                  {Math.round(stats.hoursSupported / stats.activeVolunteers)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-solidarity-red" />
              Quick Actions
            </CardTitle>
            <CardDescription>Administrative tools for solidarity coordinators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Manage Volunteer Shifts
              </Button>
              <Button variant="outline" className="justify-start">
                <Users className="h-4 w-4 mr-2" />
                Review Training Progress
              </Button>
              <Button variant="outline" className="justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat Quality Review
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <SolidarityFooter />
    </div>
  );
};

export default Admin;
