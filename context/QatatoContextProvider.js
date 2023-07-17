"use client";
import { createContext, useState } from "react";

export const qatatoContext = createContext();
const QatatoContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [videos, setVideos] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [products, setProducts] = useState(null);
    const [cart, setCart] = useState(null);
    const [search, setSearch] = useState(null);
    const value = {
        user,
        setUser,
        videos,
        setVideos,
        menuOpen,
        setMenuOpen,
        mobileMenuOpen,
        setMobileMenuOpen,
        products,
        setProducts,
        cart,
        setCart,
        search,
        setSearch,
    };
    return (
        <qatatoContext.Provider value={value}>
            {children}
        </qatatoContext.Provider>
    );
};

export default QatatoContextProvider;
