import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Stuy Linux</title>
				<meta name="description" content="Stuyvesant Linux club" />
			</Head>

			<main id={styles.main}>
				<h1 className={styles.title}>Stuyvesant Linux Club</h1>
				<div id={styles.content}>
					<p>
						Stuy Linux is a new initiative to promote the use of
						Free/Libre Open Source Software (FLOSS) programs and the
						GNU/Linux projects.
					</p>
					<p>
						This site is still under construction, so check back
						soon!
					</p>
				</div>
				<div id={styles.social_media_links}>
					<p>
						Join us on&nbsp;
						<a href="https://stuyactivities.org/stuylinux">
							StuyActivities
						</a>
					</p>
					<p>
						Chat on&nbsp;
						<a href="https://discord.gg/8pkfP7mU78">
							Discord
						</a>
					</p>
					<p>
						IRC server/bridge coming soon!
					</p>
				</div>
			</main>
		</div>
	);
};

export default Home;
