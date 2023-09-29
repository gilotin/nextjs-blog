import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Nikolay Toshev";
export const siteTitle = "Nikolay Toshev test app";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <p>This is test webpage, thanks for visiting it!</p>

                <nav className={styles.navigation}>
                    <ul>
                        <Link href="/authors/me">About</Link>
                    </ul>
                    <ul>
                        <Link href="/todoApp/todo-list">Todo List</Link>
                    </ul>
                    <ul>
                        <Link href="/notebook">NoteBook</Link>
                    </ul>
                </nav>
                {home}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}

            <footer className={utilStyles.footer}>This site is for learning purposes only!</footer>
        </div>
    );
}
