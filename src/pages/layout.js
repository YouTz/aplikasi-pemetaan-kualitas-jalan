import Head from "next/head";
import { appName } from "../../app.config";

const Layout = ({ children }) => {
    return <>
        <Head>
            <title>{appName}</title>
        </Head>
        {children}
    </>;
};

export default Layout;