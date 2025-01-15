import { Outlet } from "react-router";
import Header from "./Header";

export default function Body(){
    return (
        <section className="bg-bgImage min-h-screen bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
           <main className="relative">
                <Header />
                <Outlet />
           </main>
        </section>
    )
}