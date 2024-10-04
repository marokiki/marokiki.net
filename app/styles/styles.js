const lightTheme = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0",
    color: "#e0ffff",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7f8c8d",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#34495e",
    borderBottom: "2px solid #3498db",
    paddingBottom: "10px",
  },
  infoList: {
    listStyleType: "none",
    padding: "0",
  },
  infoItem: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#e0ffff",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    fontWeight: "bold",
  },
  linkHover: {
    textDecoration: "underline",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#2c3e50",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #ddd",
    marginTop: "40px",
  },
  footerText: {
    color: "#7f8c8d",
  },
};

const darkTheme = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0",
    color: "#e0ffff",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7f8c8d",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#34495e",
    borderBottom: "2px solid #3498db",
    paddingBottom: "10px",
  },
  infoList: {
    listStyleType: "none",
    padding: "0",
  },
  infoItem: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#e0ffff",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    fontWeight: "bold",
  },
  linkHover: {
    textDecoration: "underline",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#2c3e50",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #ddd",
    marginTop: "40px",
  },
  footerText: {
    color: "#7f8c8d",
  },
};

const getThemeStyles = () => {
  if (typeof window !== "undefined") {
    const theme = document.body.className;
    return theme === "dark" ? darkTheme : lightTheme;
  }
  return lightTheme; // Default theme is light
};

const styles = getThemeStyles();

export default styles;
