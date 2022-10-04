import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const View = () => {
  const navigate = useNavigate();
  const [list, setList] = useState({});
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    getlistById();
  }, [])

  const { id } = useParams();
  console.log(id);

  const abreModal = () => setOpen(true);
  const fechaModal = () => setOpen(false);
  
  const getlistById = async () => {
    try {
        const request = await Api.fetchGetById(id);
        if(request.status === 400) {
          alert('Id invalid.Erro API')
        }
        if(request.status === 500) {
          alert('Erro Servidor')
        }
        const list = await request.json().catch(error => console.log('ERRO', error));
        setList(list);
        console.log(list);
      } catch(error) {
        console.log('ERROR', error);
      }
    // const request = await Api.fetchGetById(id);
    // const list = await request.json();

    // setList(list);
    // console.log(list);
  }

  const handleDelete = async () => {
    const response = await Api.fetchDelete(id);
    const data = await response.json();
    alert(data.message)
    navigate('/');
  }


  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-12'>
          <div className='card p-3'>
            <h4>Titulo: {list.titulo} </h4>
            <p>Descrição: {list.descricao}</p>
            <p>Status: {list.status}</p>
            <p>Prioridade: {list.prioridade}</p>
            <p>Prazo: {list.prazo}</p>
            <div className='btn-group my-4 w-100'>
              <Link to={`/edit/${list._id}`} className='btn btn-outline-primary btn-rounded waves-effect'>Editar</Link>
              <button className='btn btn-outline-danger btn-rounded waves-effect' onClick={abreModal}>Excluir</button>
              <a href="/" class="btn btn-outline-info btn-rounded waves-effect" role="button" aria-pressed="true">Voltar</a>
            </div>
          </div>
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
  )
}

export default View;
