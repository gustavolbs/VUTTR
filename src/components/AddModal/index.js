/**
 * SimpleModal
 * Componente que representa o modal de adição de um novo item.
 *
 * Bibliotecas Adicionais
 *  - Material Ui para o Modal
 *  - React Icons para os ícones
 */
import React, { useState, useCallback, useEffect } from 'react';
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
    maxWidth: 600,
    width: '80vw',
    minWidth: 330,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 5,
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ reloadData }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const [inputErroName, setInputErroName] = useState('');
  const [inputErroLink, setInputErroLink] = useState('');
  const [inputErroTags, setInputErroTags] = useState('');
  const [inputErroDescription, setInputErroDescription] = useState('');
  const [errorsFound, setErrorsFound] = useState(1);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cleanFields = () => {
    setTitle('');
    setLink('');
    setDescription('');
    setTags('');
    setInputErroName('');
    setInputErroLink('');
    setInputErroTags('');
    setInputErroDescription('');
    setErrorsFound(0);
  };

  const verifyFields = () => {
    if (title.length === 0) {
      setInputErroName("Field Name can't be empty");
      setErrorsFound(errorsFound + 1);
    } else {
      setInputErroName('');
    }
    if (link.length === 0) {
      setInputErroLink("Field Link can't be empty");
      setErrorsFound(errorsFound + 1);
    } else {
      setInputErroLink('');
    }
    if (description.length === 0) {
      setInputErroDescription("Field Description can't be empty");
      setErrorsFound(errorsFound + 1);
    } else {
      setInputErroDescription('');
    }
    if (tags.length === 0) {
      setInputErroTags("Field Tags can't be empty");
      setErrorsFound(errorsFound + 1);
    } else {
      setInputErroTags('');
    }
  };

  const verifyErrorsFound = () => {
    if (
      inputErroName === 0 &&
      inputErroLink === 0 &&
      inputErroDescription === 0 &&
      inputErroTags === 0
    ) {
      setErrorsFound(0);
      console.log(errorsFound);
    }
  };

  useEffect(() => {
    verifyErrorsFound();
    // verifyFields();
  }, [errorsFound]);

  const handleAdd = async e => {
    e.preventDefault();

    verifyFields();
    // console.log(errorsFound);

    if (errorsFound === 0) {
      try {
        await api.post(`/tools`, {
          title,
          link,
          description,
          tags: tags.split(' '),
        });

        handleClose();

        cleanFields();

        reloadData();
      } catch (err) {
        console.log('Something went Wrong');
      } finally {
        console.log('OK');
      }
      // console.log('TOP');
      // console.log(errorsFound);
    } else {
      // console.log('DEU AGUIA');
      // console.log(errorsFound);
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
              placeholder="Enter with tool name"
              required
              onChange={e => setTitle(`${e.target.value}`)}
            />
            {inputErroName && <div className="modalError">{inputErroName}</div>}
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
            {inputErroLink && <div className="modalError">{inputErroLink}</div>}
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
            {inputErroDescription && (
              <div className="modalError">{inputErroDescription}</div>
            )}
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
            {inputErroTags && <div className="modalError">{inputErroTags}</div>}
          </label>

          <div id="buttonContainer">
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
            <button type="button" id="addButton" onClick={handleAdd}>
              Add tool
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
