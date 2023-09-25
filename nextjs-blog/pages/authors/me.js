import Image from "next/image";
import Link from "next/link";
import styles from "../authors/Me.module.css";

export default function Me() {
    return (
        <>
            <h1>That's me</h1>
            <div className={styles.profile}>
                <Image src="/profile.jpg" height={144} width={144} alt="Your Name" />
            </div>
            <div>
                <Link href="/">Back</Link>
            </div>
        </>
    );
}
