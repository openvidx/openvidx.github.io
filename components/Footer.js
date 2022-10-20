import styles from "../styles/Footer.module.css";

import ExternalLink from "./ExternalLink";
import TwitterSvg from "../public/twitter.svg";
import DiscordSvg from "../public/discord.svg";
import MailSvg from "../public/mail.svg";

export default function Footer() {
  return (
    <footer className={`${styles.wrapper} flex-center flex-column`}>
      <p>© 2021-{new Date().getFullYear()} 8glabs, Inc.</p>
      <p className="mt-2">All Rights Reserved</p>
      <div className="flex-center mt-4">
        <ExternalLink>
          <TwitterSvg className={`${styles.social} ${styles.twitter}`} />
        </ExternalLink>
        <ExternalLink className="ml-4">
          <DiscordSvg className={`${styles.social} ${styles.discord}`} />
        </ExternalLink>
        <ExternalLink className="ml-4">
          <MailSvg className={`${styles.social} ${styles.mail}`} />
        </ExternalLink>
      </div>
    </footer>
  );
}