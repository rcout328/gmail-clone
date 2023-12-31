import React from 'react';
import './Emailrow.css';
import { Checkbox, IconButton } from '@mui/material';
import { ArrowDropDown, LabelImportantOutlined, MoreVert, Redo, StarBorderOutlined } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

function Emailrow({ id, title, subject, description, time }) {
  const history = useHistory();

  const handleRowClick = () => {
    history.push('/mail');
  };

  return (
    <div onClick={handleRowClick} className='emailRow'>
      <div className='emailRow-options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className='emailRow-title'>{title}</h3>
      <div className='emailRow-message'>
        <h4>
          {subject} <span className='emailRow-description'>{description}</span>
        </h4>
      </div>
      <p className='emailRow-time'>{time}</p>
    </div>
  );
}

export default Emailrow;
