<<<<<<< HEAD
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// const Home = () => {
//   const { user } = useAuth();

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-sky-400 to-blue-500 text-white py-20">
      
//       <div className="text-center px-6">
//         <h1 className="text-5xl font-extrabold mb-6">
//           Online <span className="text-yellow-300">Ticket Management System</span>
//         </h1>

//         <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
//           Submit complaints, track ticket status, and manage issues easily. 
//           Admin can assign tickets and update status through the dashboard.
//         </p>

//         <div className="space-x-4">
//           {user ? (
//             <Link 
//               to="/dashboard" 
//               className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition"
//             >
//               Go to Dashboard
//             </Link>
//           ) : (
//             <>
//               <Link 
//                 to="/register" 
//                 className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition"
//               >
//                 Register
//               </Link>

//               <Link 
//                 to="/login" 
//                 className="bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-sky-800 transition"
//               >
//                 Login
//               </Link>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="mt-16 grid md:grid-cols-3 gap-8 px-10">
        
//         <div className="bg-white text-sky-700 shadow-xl p-6 rounded-xl">
//           <h3 className="text-xl font-bold mb-3">Submit Ticket</h3>
//           <p>
//             Users can easily submit complaints or issues online.
//           </p>
//         </div>

//         <div className="bg-white text-sky-700 shadow-xl p-6 rounded-xl">
//           <h3 className="text-xl font-bold mb-3">Track Status</h3>
//           <p>
//             Track complaint status in real-time using ticket ID.
//           </p>
//         </div>

//         <div className="bg-white text-sky-700 shadow-xl p-6 rounded-xl">
//           <h3 className="text-xl font-bold mb-3">Admin Panel</h3>
//           <p>
//             Admin can assign tickets, update status, and manage users.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Home;

=======
>>>>>>> 051e886f9d05b0b8cb318ec9ee0ac006324704a2
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-r from-sky-400 to-blue-500 text-white">

      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          Online <span className="text-yellow-300">Ticket Management System</span>
        </h1>

        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          Submit complaints, track ticket status, and manage issues easily. 
          Admin can assign tickets and update status through the dashboard.
        </p>

        <div className="space-x-4">
          {user ? (
            <Link 
              to="/dashboard" 
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link 
                to="/register" 
                className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition"
              >
                Register
              </Link>

              <Link 
                to="/login" 
                className="bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-sky-800 transition"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 px-10 pb-16">
        
        <div className="bg-white text-sky-700 shadow-xl p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-3">Submit Ticket</h3>
          <p>
            Users can easily submit complaints or issues online.
          </p>
        </div>

        <div className="bg-white text-sky-700 shadow-xl p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-3">Track Status</h3>
          <p>
            Track complaint status in real-time using ticket ID.
          </p>
        </div>

        <div className="bg-white text-sky-700 shadow-xl p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-3">Assign Tickets</h3>
          <p>
            Admin can assign tickets to team members and update status.
          </p>
        </div>

      </div>

      {/* Statistics Section */}
      <div className="bg-white text-sky-700 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center px-10">
          <div>
            <h2 className="text-4xl font-bold">120+</h2>
            <p>Total Tickets</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">95+</h2>
            <p>Resolved Tickets</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">25+</h2>
            <p>Pending Tickets</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 bg-sky-800 text-white">
        © 2026 Ticket Management System | All Rights Reserved
      </div>

=======
    <div className="text-center py-20">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Build Faster with <span className="text-blue-600">React + Node</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        This is a complete full-stack authentication starter template with Role-Based Access Control (RBAC).
      </p>
      
      <div className="space-x-4">
        {user ? (
          <Link 
            to="/profile" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>
        ) : (
          <>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link 
              to="/login" 
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Login
            </Link>
          </>
        )}
      </div>
>>>>>>> 051e886f9d05b0b8cb318ec9ee0ac006324704a2
    </div>
  );
};

export default Home;