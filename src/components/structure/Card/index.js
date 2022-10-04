import React,{ useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Api from '../../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Card = (props) => {
  const list = props.list;
  const navigate = useNavigate();
  
  const [open, setOpen] = useState(false);
  
  const { id } = useParams();
  console.log(id);

  const abreModal = () => setOpen(true);
  const fechaModal = () => setOpen(false);

  const handleDelete = async () => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    alert(data.message)
    navigate('/');
  }

  return (
    <Link to={`/view/${list._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Titulo: {list.titulo}</h5>
          <p className="card-text">Descrição: {list.descricao}</p>
          <p className="card-text">Status: {list.status}</p>
          <p className="card-text">Prioridade: {list.prioridade}</p>
          <p className="card-text">Prazo: {list.prazo}</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md">
            <Link to={`/edit/${list._id}`} className='btn btn-outline-primary btn-rounded waves-effect'>Editar</Link>
            <button className='btn btn-outline-danger btn-rounded waves-effect' onClick={abreModal}>Excluir</button>
          </div>
        </div>
        <Modal open={open} onClose={fechaModal} center>
          <h2 className='my-4'>Deseja realmente excluir?</h2>
          <div className='d-flex w-50 mx-auto justify-content-around'>
            <button className='btn btn-danger me-2' onClick={fechaModal}>Não</button>
            <button className='btn btn-success' onClick={handleDelete}>Sim</button>
          </div>
        </Modal>
      </div>
    </Link>
  )
}

export default Card;