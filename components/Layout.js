import Footer from "@/components/Footer"
import Meta from "@/components/Meta"

export default function Layout({preview, children}) {
    return (
        <>
            <Meta />
            <div className="my-layout">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}