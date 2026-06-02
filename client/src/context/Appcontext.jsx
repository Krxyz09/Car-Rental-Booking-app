import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const currency = import.meta.env.VITE_CURRENCY;
    const [token, setToken] = useState(null);
    const [user, setuser] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [cars, setCars] = useState([]);

    // Checking if user is logged in or not
    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/users/data');
            if (data.success) {
                setuser(data.user);
                setIsOwner(data.user.role === 'owner');
            } else {
                // If backend session expired, clear local data safely
                logout();
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    // Function to fetch all cars from the server
    const fetchCars = async () => {
        try {
            const { data } = await axios.get('/api/users/cars');
            if (data.success) {
                setCars(data.cars);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    // Function to logout the user
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setuser(null);
        setIsOwner(false);
        delete axios.defaults.headers.common['Authorization'];
        toast.success('Logged out successfully');
        navigate('/');
    };

    // Getting tokens using useEffect when the app loads
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
        
    }, []);

    // Managing Axios headers based on token state shifts
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchUser();
            fetchCars();
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    const value = {
        navigate,
        currency,
        axios,
        user,
        setuser,
        token,
        setToken,
        isOwner,
        setIsOwner,
        fetchUser,
        showLogin,
        setShowLogin,
        logout,
        fetchCars,
        cars,
        setCars,
        pickupDate,
        setPickupDate,
        returnDate,
        setReturnDate
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// 2. This is now the ONLY way components consume the context data
export const useAppContext = () => {
    return useContext(AppContext);
};