import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';

import { AddButton } from '../HeaderInput/styles';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 5,
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async e => {
    e.preventDefault();

    try {
      await api.post(`/tools`, {
        title,
        link,
        description,
        tags: tags.split(' '),
      });
      handleClose();
      window.location.reload();
    } catch (err) {
      console.log('Something went Wrong');
    } finally {
      console.log('OK');
    }
  };

  return (
    <div>
      <AddButton onClick={handleOpen}>
        <FaPlus />
        Add
      </AddButton>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">
            <FaPlus /> Add new tool
          </h2>
          <label>
            <span>
              Tool Name<upper>*</upper>
            </span>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter with title"
              required
              onChange={e => setTitle(`${e.target.value}`)}
            />
          </label>

          <label>
            <span>
              Tool Link<upper>*</upper>
            </span>
            <input
              type="text"
              name="link"
              value={link}
              placeholder="Enter with link"
              required
              onChange={e => setLink(`${e.target.value}`)}
            />
          </label>

          <label>
            <span>
              Tool Description<upper>*</upper>
            </span>
            <input
              type="text"
              name="description"
              value={description}
              placeholder="Enter with description"
              required
              onChange={e => setDescription(`${e.target.value}`)}
            />
          </label>

          <label>
            <span>
              Tags<upper>*</upper>
            </span>
            <input
              type="text"
              name="tags"
              value={tags}
              placeholder="Enter with a new tag"
              required
              onChange={e => setTags(`${e.target.value}`)}
            />
          </label>

          <div id="buttonContainer">
            <button onClick={handleClose}>Cancel</button>
            <button type="submit" id="addButton" onClick={handleAdd}>
              Add tool
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
