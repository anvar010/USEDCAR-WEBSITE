import { Link } from 'react-router-dom';
import Navbar from '../../shared/Navbar';
import PageNotFound from '../PageNotFound';

export default function AdminPage() {

    const token = !!localStorage.getItem('token');
    // const navigate = useNavigate();

    if (!token) {
        // navigate('/PageNotFound'); 
        return <PageNotFound />; 
    }


  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-8">
        <Link to="/user-details">
          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-8 px-4 rounded focus:outline-none focus:shadow-outline m-10">
            User Details
          </button></Link>
          <Link to={'/car-details'}>
          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-8 px-4 rounded focus:outline-none focus:shadow-outline m-10">
            Responses from Sell your car Form
          </button>
        </Link>
      </div>
    </>
  );
}
