import ProtectedRoute from "@/util/ProtectRoute";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Welcome to your private Dashboard</h1>
        {/* Dashboard content here*/}
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
