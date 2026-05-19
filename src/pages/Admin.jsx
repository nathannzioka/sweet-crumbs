import AddPastryForm from "../components/AddPastryForm";
import AdminPastryList from "../components/AdminPastryList";

function Admin() {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <AddPastryForm />

      <hr />

      <AdminPastryList />
    </div>
  );
}

export default Admin;