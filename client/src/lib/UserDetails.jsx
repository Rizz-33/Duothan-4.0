const UserDetails = () => {
  const user = {
    title: "DTP code : #1234",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={user.image} alt="User" style={styles.image} />
      </div>
      <div style={styles.detailsContainer}>
        <h1 style={styles.title}>{user.title}</h1>
        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.detail}>
          <strong>Email:</strong> {user.email}
        </p>
        <p style={styles.detail}>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "800px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    flexShrink: 0,
    marginRight: "20px",
  },
  image: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: "20px",
    borderLeft: "2px solid #ddd",
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "1.5rem",
    color: "#555",
  },
  name: {
    margin: "0 0 10px 0",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  detail: {
    margin: "5px 0",
    fontSize: "1.1rem",
    color: "#333",
  },
};

export default UserDetails;
