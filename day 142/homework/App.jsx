function App() {
  const styles = {
    container: {
      display: "flex",
      flexDirection:"column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "400px",
      height:"70%",
      padding:"20px",
      margin: "40px auto",
      borderRadius: "20px",
      backgroundColor: "hsl(225, 100%, 94%)",
      textAlign: "center"
    },
    header:{
      padding: "20px",
      textAlign: "center",
      fontSize: "30px",
      borderRadius: "5px"
    },
    paragrap:{
      fontSize: "16px",
    },
    plan:{
      width:"80%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor:"hsl(225, 100%, 98%)",
      borderRadius: "10px",
    },
    proceedButton: {
      backgroundColor: "#3b57e6", 
      color: "white",
      fontWeight: "600",
      fontSize: "16px",
      padding: "12px 0",
      width: "280px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer"
    },
    cancelButton: {
      backgroundColor: "transparent",
      color: "#7a8499", 
      fontWeight: "600",
      fontSize: "14px",
      border: "none",
      cursor: "pointer"
    }
  }

  return (
    <div style={styles.container}>
      
      <h1 style={styles.header}>Order Summary</h1>
      <p style={styles.paragrap}>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div style={styles.plan}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB"/><path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"/></g></svg>
        <h3 style={styles.paragrap}>
          Annual Plan
          <br />
          $59.99/year
        </h3>

        <a href="#">Change</a>
      </div>

      <button style={styles.proceedButton}>Proceed to Payment</button>
      <button style={styles.cancelButton}>Cancel Order</button>
    </div>
      
      
    );
}