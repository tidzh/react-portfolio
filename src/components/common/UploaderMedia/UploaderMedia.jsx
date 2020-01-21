import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import style from "./UploaderMedia.module.scss";
import { getImg } from "../../../utils/functionHelper";

const styles = theme => ({
  input: {
    display: "none"
  },
  icon: {
    color: "#ffffff"
  }
});

class UploaderMedia extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    images: `${getImg(this.props.img)}`
  };

  handleCapture = ({ target }) => {
    try {
      if (target.files.length !== 0) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = evt => {
          this.setState({ images: evt.target.result });
        };
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={style.img}>
        <img src={this.state.images} alt="" />
        <div className={style.upload}>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-photo"
            onChange={this.handleCapture}
            type="file"
          />
          <label htmlFor="icon-button-photo">
            <IconButton
              color="default"
              className={classes.icon}
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UploaderMedia);
