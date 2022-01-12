import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  live: {
    flexDirection: "row",
  },
  live_text: {
    color: "white",
    flex: 1,
    alignSelf: "center",
    fontSize: 20,
  },
  flag_cont: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",

  },
  flag: {
    width: 320,
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  info_container: {
    marginVertical: 15,
  },
  link_wrap: {
    alignItems: "center",
  },
  link: {
    backgroundColor: "red",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
});
