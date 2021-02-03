import React from 'react';
import PropTypes from 'prop-types';

const WorkArea = props => {
  const { professional } = props;

  return (
    <div className="workArea-container">
      <img className="workArea-workshopIcon" src="icons/workshop.svg" alt="workshopIcon" />
      <div className="workArea-text">{professional.work_area}</div>
      <style jsx>
        {`
          .workArea-container {
            float: left;
            margin: 10px 0 0 20px;
            width: calc(100% - 20px);
          }

          .workArea-workshopIcon {
            float: left;
            width: 22px;
          }

          .workArea-text {
            float: left;
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 17px;
          }
        `}
      </style>
    </div>
  );
};

WorkArea.propTypes = {
  professional: PropTypes.object.isRequired
};

export default WorkArea;
