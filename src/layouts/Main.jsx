import { Outlet } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";


export default function Mainlayout() {
    return (
        <div class="flex flex-col w-full">
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    )
}