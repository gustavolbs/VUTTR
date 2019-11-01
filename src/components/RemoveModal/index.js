/**
 * SimpleModal
 * Componente que representa o modal de remoção de um item.
 *
 * Bibliotecas Adicionais
 *  - Material Ui para o Modal
 *  - React Icons para os ícones
 */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';

import { Container } from './styles';

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
    minWidth: 336,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 5,
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ id, tools, title, reloadData }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = async () => {
    try {
      await api.delete(`/tools/${id}`);
      handleClose();

      reloadData();
    } catch (err) {
      console.log('Something went Wrong');
    } finally {
      console.log('OK');
    }
  };

  return (
    <Container>
      <button type="button" onClick={handleOpen}>
        <FaPlus />
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        className="modalRemove"
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">
            <FaPlus /> <span>Remove tool</span>
          </h2>
          <p>
            Are you sure you want to remove <strong>{title}</strong>?
          </p>
          <div id="buttonContainer">
            <button onClick={handleClose} type="button">
              Cancel
            </button>
            <button onClick={handleRemove} type="button" id="removeButton">
              Yes, remove
            </button>
          </div>
        </div>
      </Modal>
    </Container>
  );
}
