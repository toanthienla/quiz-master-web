import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { updateUser } from "~/store/userSlice";
import { API_BASE_URL } from "~/constants/constants";

export default function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ ...user });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.patch(`${API_BASE_URL}/users/${user.id}`, formData);
      dispatch(updateUser(formData));
      alert("Profile updated successfully!");
    } catch (error) {

      console.error("Error updating profile:", error);
    }
  };

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />

      <main className="flex-grow px-4 py-12 bg-base-200/30">
        <h2 className="text-2xl font-bold text-center mb-8">Profile Settings</h2>

        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            {["fullName", "email", "studentId", "username", "password", "img"].map((field) => (
              <div key={field}>
                <label className="block mb-1 capitalize font-medium">{field}</label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  disabled={field === "email" || field === "studentId" ? true : false}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={handleSave}
              className="btn btn-primary w-full text-white"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}