import { Outlet } from "react-router-dom"
import { Topbar } from "../components/topbar/Topbar"
import { Footer } from "../components/footer/Footer"

export const LayoutMain = () => {
    return (
        <>
        <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"/>
            <Topbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}