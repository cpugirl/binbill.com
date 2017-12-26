import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Main from "./dashboard";

import axios from "axios";

class Index extends Component {
  static async getInitialProps({ req }) {
    const res = await axios.get('http://52.66.79.240/wp-json/wp/v2/posts/');
    return { blogData:res.data }
  }
  render() {
    return (
      <div className="root">
        <Header />
        <Main blogData={this.props.blogData}/>
        <Footer />
        {/* <p>Hello Next.js</p> */}
      </div>
    );
  }
}

export default Index;
