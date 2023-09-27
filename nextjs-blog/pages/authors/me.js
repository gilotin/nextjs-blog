import Image from "next/image";
import styles from "../authors/Me.module.css";
import Layout from "../../components/layout";

export default function Me() {
    return (
        <Layout>
            <h1>That's me</h1>
            <div className={styles.profile}>
                <Image src="/profile.jpg" height={144} width={144} alt="Your Name" />
            </div>
        </Layout>
    );
}
