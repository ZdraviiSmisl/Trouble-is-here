import styles from "./Notifications.module.css";

const Notifications = (props) => {
  let clasStatus = "";

  if (props.status === "error") {
    clasStatus = styles.error;
  }

  if (props.status === "success") {
    clasStatus = styles.success;
  }

  const notificationClasses = `${styles.notification} ${clasStatus}`;

  return (
    <section className={notificationClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notifications;
