import "./sass/style.scss";
import CenteredNavbar from "./components/organisms/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SeeAndDo from "./pages/SeeAndDo";
import Contact from "./pages/ContactUs";
import FindYourStay from "./pages/FindYourStay";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Hotel from "./pages/Hotel";
import { Footer } from "./components/organisms/Footer";
import { useEffect, useState } from "react";
import { removeItem, getItem } from "./settings/store";
import { HelmetProvider } from "react-helmet-async";

function App() {
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");
    const login = () => {
        setUser(getItem("user"));
        setToken(getItem("token"));
    };

    useEffect(() => {
        const user = getItem("user");
        if (user) setUser(user);
    }, []);

    const logout = () => {
        removeItem("user");
        removeItem("token");
        setUser("");
        setToken("");
    };

    return (
        <>
            <HelmetProvider>
                <Router>
                    <CenteredNavbar user={user} logout={logout} />
                    <main>
                        <Routes>
                            <Route path="/" exact element={<Home />} />
                            <Route
                                path="/findyourstay"
                                element={<FindYourStay />}
                            />
                            <Route path="/seeanddo" element={<SeeAndDo />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contactus" element={<Contact />} />
                            <Route
                                path="/login"
                                element={<Login login={login} />}
                            />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/hotel/:id" element={<Hotel />} />
                        </Routes>
                    </main>
                </Router>
                <Footer />
            </HelmetProvider>
        </>
    );
}

export default App;
