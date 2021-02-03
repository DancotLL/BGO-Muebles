import React from 'react';
import PropTypes from 'prop-types';

const Facebook = props => {
  const { professional } = props;

  if (!professional.facebook_url || !professional.facebook_user) return <div />;

  return (
    <div className="facebook-container">
      <img className="facebook-icon" src="icons/facebook.svg" alt="facebookIcon" />
      <div className="facebook-text">
        <a className="facebook-link" target="blank" href={professional.facebook_url}>
          {professional.facebook_user}
        </a>
      </div>
      <style jsx>
        {`
          .facebook-container {
            float: left;
            margin: 10px 0 0 20px;
            width: calc(100% - 20px);
          }

          .facebook-icon {
            float: left;
          }

          .facebook-text {
            float: left;
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 25px;
            color: white;
          }

          .facebook-link {
            color: #0cc44a;
          }

          .facebook-link:hover {
            color: #14a042;
          }
        `}
      </style>
    </div>
  );
};

Facebook.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Facebook;
