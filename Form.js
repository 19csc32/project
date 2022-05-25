import React from "react";
class Form extends React.Component {
  render() {
    return <div id="ff-compose"></div>;
  }
  componentDidMount() {
    var script = document.createElement("script");
    script.id = "ff-script";
    script.src =
    "https://formfacade.com/public/105213104425386878866/all/form/1FAIpQLSeh20lPjOi5ekzqPloMTphyVqZcbN15ESQelipgkmI4I8UyPg";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default Form;