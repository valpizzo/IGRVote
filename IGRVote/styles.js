import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: 'lightblue',
  },
  navBar: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    //justifyContent: "space-between",
    height: "25%",
    backgroundColor: "#1E3461",
    paddingLeft: "5%",
  },
  header: {
    flex: 6,
    paddingTop: "17%",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  logoBox: {
    flex: 0.92,
    height: 50,
    width: 50,
    borderRadius: 50,
    overflow: "hidden",
    top: "14%",
    right: "20%"
    //left: "79%",
    //top: "-45%",
  },
  body: {
    flex: 5,
    color: "white"
  },
  botBar: {
    flex: .7,
    display: "flex",
    height: "20%",
    backgroundColor: "#427EC0",
  }
});