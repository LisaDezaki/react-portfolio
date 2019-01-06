import React, { Component } from "react";
import { Button, Label, Section, Title } from "..";
import "./style.scss";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoPosition: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // var el = document.getElementById("story_body");
    // var minPixel = el.offsetTop;
    // var maxPixel = minPixel + el.scrollHeight;
    // var value = document.body.scrollTop;
    // // respect bounds of element
    // var percent = (value - minPixel) / (maxPixel - minPixel);
    // percent = Math.min(1, Math.max(percent, 0)) * 100;
    // let pos = document.getElementById(this.props.id).getBoundingClientRect();
    // let n = vh - Math.floor(pos.top);
    // let range = vh + pos.height;
    // let percent = (n / range) * 100;
    // if (percent >= 0 && percent <= 100) {
    //   let translateY = percent - 50;
    //   translateY = translateY - translateY * 2;
    //   translateY *= 2;
    //   $(el)
    //     .find(".project-info")
    //     .css("transform", "translateY(" + translateY + "%)");
    // }
    // console.log(pos);
  };

  render() {
    return (
      <Section
        id={this.props.id}
        className={`project align-${this.props.align}`}
        height="75vh"
      >
        <div
          className="project__img"
          style={{ backgroundImage: `url(./img/${this.props.img}` }}
        />
        <div className="project__panel">
          <div className="project__info">
            <Title className="project__name">{this.props.name}</Title>
            <Label className="project__type">{this.props.type}</Label>
            <p className="project__desc">{this.props.desc}</p>
            <Button className="project__button">Go to project</Button>
          </div>
        </div>
      </Section>
    );
  }
}

// const Project = ({ align, desc, img, link, name, type }) => (
//   <Section className={`project align-${align}`} height="75vh">
//     <div
//       className="project__img"
//       style={{ backgroundImage: `url(./img/${img}` }}
//     />
//     <div className="project__panel">
//       <div className="project__info">
//         <Title className="project__name">{name}</Title>
//         <Label className="project__type">{type}</Label>
//         <p className="project__desc">{desc}</p>
//         <Button className="project__button">Go to project</Button>
//       </div>
//     </div>
//   </Section>
// );

export default Project;
