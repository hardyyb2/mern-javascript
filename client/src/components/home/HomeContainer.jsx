import { connect } from "react-redux";

import HomeComponent from "./HomeComponent";
import { homeOperations } from "./duck";

const mapStateToProps = (state) => {
  const { name, age, error, loading } = state.home;
  return {
    name,
    age,
    error,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  const fetchNameConnect = (name) => dispatch(homeOperations.fetchName(name));
  const addNameConnect = (name, age) =>
    dispatch(homeOperations.addName(name, age));

  return {
    fetchNameConnect,
    addNameConnect,
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
