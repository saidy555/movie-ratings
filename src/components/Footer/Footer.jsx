import styles from "./Footer.module.css";
import qr from "../../assets/qr-code.png";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socials_app}>
        <div className={styles.socials}>
          <p>Follow RATINGS on social</p>
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/mohamedalsaidy/"
              target="_blank"
              className={styles.icon}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                class="ipc-icon ipc-icon--tiktok"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M15.2346 3C15.5316 5.55428 16.9572 7.07713 19.4359 7.23914V10.112C17.9995 10.2524 16.7412 9.78262 15.2778 8.89699V14.2702C15.2778 21.096 7.83633 23.2291 4.84463 18.3365C2.92217 15.1882 4.09941 9.66382 10.2664 9.44241V12.4719C9.7966 12.5475 9.29438 12.6663 8.83536 12.8229C7.46372 13.2873 6.68609 14.1568 6.9021 15.6904C7.31791 18.6281 12.7073 19.4975 12.2591 13.7571V3.0054H15.2346V3Z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedalsaidy/"
              target="_blank"
              className={styles.icon}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                class="ipc-icon ipc-icon--instagram"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M11.997 2.04c-2.715 0-3.056.011-4.122.06-1.064.048-1.79.217-2.426.463a4.901 4.901 0 0 0-1.771 1.151 4.89 4.89 0 0 0-1.153 1.767c-.247.635-.416 1.36-.465 2.422C2.011 8.967 2 9.307 2 12.017s.011 3.049.06 4.113c.049 1.062.218 1.787.465 2.422a4.89 4.89 0 0 0 1.153 1.767 4.901 4.901 0 0 0 1.77 1.15c.636.248 1.363.416 2.427.465 1.066.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.049 1.79-.217 2.426-.464a4.901 4.901 0 0 0 1.77-1.15 4.89 4.89 0 0 0 1.154-1.768c.247-.635.416-1.36.465-2.422.048-1.064.06-1.404.06-4.113 0-2.71-.012-3.05-.06-4.114-.049-1.062-.218-1.787-.465-2.422a4.89 4.89 0 0 0-1.153-1.767 4.901 4.901 0 0 0-1.77-1.15c-.637-.247-1.363-.416-2.427-.464-1.067-.049-1.407-.06-4.122-.06m0 1.797c2.67 0 2.985.01 4.04.058.974.045 1.503.207 1.856.344.466.181.8.397 1.15.746.349.35.566.682.747 1.147.137.352.3.88.344 1.853.048 1.052.058 1.368.058 4.032 0 2.664-.01 2.98-.058 4.031-.044.973-.207 1.501-.344 1.853a3.09 3.09 0 0 1-.748 1.147c-.35.35-.683.565-1.15.746-.352.137-.88.3-1.856.344-1.054.048-1.37.058-4.04.058-2.669 0-2.985-.01-4.039-.058-.974-.044-1.504-.207-1.856-.344a3.098 3.098 0 0 1-1.15-.746 3.09 3.09 0 0 1-.747-1.147c-.137-.352-.3-.88-.344-1.853-.049-1.052-.059-1.367-.059-4.031 0-2.664.01-2.98.059-4.032.044-.973.207-1.501.344-1.853a3.09 3.09 0 0 1 .748-1.147c.35-.349.682-.565 1.149-.746.352-.137.882-.3 1.856-.344 1.054-.048 1.37-.058 4.04-.058"></path>
                <path d="M11.997 15.342a3.329 3.329 0 0 1-3.332-3.325 3.329 3.329 0 0 1 3.332-3.326 3.329 3.329 0 0 1 3.332 3.326 3.329 3.329 0 0 1-3.332 3.325m0-8.449a5.128 5.128 0 0 0-5.134 5.124 5.128 5.128 0 0 0 5.134 5.123 5.128 5.128 0 0 0 5.133-5.123 5.128 5.128 0 0 0-5.133-5.124m6.536-.203c0 .662-.537 1.198-1.2 1.198a1.198 1.198 0 1 1 1.2-1.197"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedalsaidy/"
              target="_blank"
              className={styles.icon}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                class="ipc-icon ipc-icon--twitter"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M18.382 2.074h3.372l-7.404 8.43L23 21.942h-6.788l-5.315-6.95-6.085 6.95H1.44l7.844-9.017L1 2.074h6.957l4.802 6.349 5.623-6.349zm-1.18 17.887h1.869L6.975 3.98H4.966l12.235 15.981z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedalsaidy/"
              target="_blank"
              className={styles.icon}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                class="ipc-icon ipc-icon--youtube"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedalsaidy/"
              target="_blank"
              className={styles.icon}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                class="ipc-icon ipc-icon--facebook"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M20.896 2H3.104C2.494 2 2 2.494 2 3.104v17.792C2 21.506 2.494 22 3.104 22h9.579v-7.745h-2.607v-3.018h2.607V9.01c0-2.584 1.577-3.99 3.882-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.595-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V22h5.097c.61 0 1.104-.494 1.104-1.104V3.104C22 2.494 21.506 2 20.896 2"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.app}>
          <div className={styles.text}>
            <p className={styles.app_line1}>Get the RATINGS app</p>
            <p className={styles.app_line2}>For Android and iOS</p>
          </div>
          <img className={styles.qr} src={qr} alt="qr code to our app" />
        </div>
      </div>
      <p>
        an <span className={styles.company}>Al-Saidy</span> company
      </p>
      <p className={styles.copyright}>
        © {year === 2025 ? 2025 : `2025-${year}`} by Ratings.com, Inc.
      </p>
    </div>
  );
}
