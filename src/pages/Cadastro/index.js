import React from 'react';
import Api from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value; 
    const status = evento.target.status.value;
    const prioridade = evento.target.prioridade.value;
    const prazo = evento.target.prazo.value;

    const list = {
      titulo,
      descricao,
      status,
      prioridade,
      prazo,
    }
    console.log(list);

    const response = await Api.fetchPost(list);
    const result = await response.json();

    alert(result.message);
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='card mt-4'>
        <div className='card-title'>
          <h3 className='m-3'>Cadastro Tarefas do dia</h3>
        </div>
        <div className='card-body'>
          <form method='POST' onSubmit={handleSubmit}>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='titulo'>Título</label>
                  <input id='titulo' className='form-control' type='text' placeholder='Informe a Tarefa do dia' nome='titulo'/>
                </div>
              </div>
              <div className="form-group shadow-textarea">
                <div className='form-group'>
                  <label htmlFor='descricao'>Descrição</label>
                  <textarea class="form-control z-depth-1" id='descricao' rows="3" placeholder="Digite a descrição"></textarea>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='status'>Status</label>
                  <select
                    id="status"
                    className="form-control"
                    type="text"
                    placeholder="Informe o status"
                    name="status"
                  >
                    <option>Fazer</option>
                    <option>Fazendo</option>
                    <option>Feito</option>
                  </select>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='prioridade'>Prioridade</label>
                  <select
                    id="prioridade"
                    className="form-control"
                    type="text"
                    placeholder="Digite a prioridade"
                    name="prioridade"
                  >
                    <option>Alta</option>
                    <option>Média</option>
                    <option>Baixa</option>
                  </select>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='prazo'>Prazo</label>
                  <input 
                  id='prazo' 
                  className='form-control' 
                  type='date' 
                  placeholder='Informe o prazo'
                  nome='prazo'
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <button className='btn btn-success me-2' type='submit'>Enviar</button>
                <a href="/" class="btn btn-primary" role="button" aria-pressed="true">Voltar</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;
