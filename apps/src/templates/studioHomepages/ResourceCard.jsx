import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import Button from '../Button';
import color from "../../util/color";

const styles = {
  card: {
    overflow: 'hidden',
    position: 'relative',
    height: 200,
    width: 473,
    float: 'left',
    marginBottom: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.border_gray,
    background: color.teal
  },
  image: {
    position: 'absolute',
  },
  textbox: {
    position: 'absolute',
    width: 275,
    padding: 20
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
    fontFamily:'"Gotham 4r", sans-serif',
    color: color.white,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    lineHeight: "21px",
    fontFamily: '"Gotham 4r", sans-serif',
    color: color.white,
    height: 95
  },
  button: {
  },
  ltr: {
    float: 'left',
  },
  rtl: {
    float: 'right',
  },
};

class ResourceCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isRtl: PropTypes.bool.isRequired
  };

  render() {

    const { title, description, buttonText, link, image, isRtl } = this.props;
    const localeStyle = isRtl ? styles.rtl : styles.ltr;

    const filenameToImgUrl = {
      "teacher-community": require('@cdo/static/resource_cards/teachercommunity.png'),
      "guest-speaker": require('@cdo/static/resource_cards/findguestspeaker.png'),
      "professional-learning": require('@cdo/static/resource_cards/professionallearning.png'),
      "standards-framework": require('@cdo/static/resource_cards/standardsandframework.png'),
      "elementary": require('@cdo/static/resource_cards/elementary.png'),
      "middleschool": require('@cdo/static/resource_cards/middleschool.png'),
      "highschool": require('@cdo/static/resource_cards/highschool.png'),
      "hourofcode": require('@cdo/static/resource_cards/hourofcode.png'),
      "hourofcode2": require('@cdo/static/resource_cards/hourofcode2.png'),
    };
    const imgSrc = filenameToImgUrl[image];

    return (
      <div style={[styles.card, localeStyle]}>
        <div style={styles.image}>
          <img src={imgSrc}/>
        </div>
        <div style={styles.textbox}>
          <div style={[styles.title, localeStyle]}>
            {title}
          </div>
          <div style={[styles.description, localeStyle]}>
            {description}
          </div>
          <br/>
          <Button
            href={link}
            color={Button.ButtonColor.gray}
            text={buttonText}
            style={[styles.button, localeStyle]}
          />
        </div>
      </div>
    );
  }
}

export default Radium(ResourceCard);
