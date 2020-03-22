import React, { Component } from "react";
import Axios from "axios";
import Movie from "./../../components/Movie";
import { connect } from "react-redux";
import * as action from "./../../redux/action";

class ListMovie extends Component {
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    })
      .then(rs => {
        console.log(rs.data);
        this.props.getListMovie(rs.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderHTML = () => {
    return this.props.listMovie.map(item => {
      return <Movie key={item.maPhim} movie={item} />;
    });
  };

  render() {
    return (
      <div className="container">
        <h3>ListMovie</h3>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        listMovie: state.movieReducer.listMovie
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getListMovie: listMovie => {
      dispatch(action.actGetListMovie(listMovie));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
