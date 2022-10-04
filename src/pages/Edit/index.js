import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();

  const [list, setList] = useState({
    titulo: '',
    descricao: '',
    status: '',
    prioridade: '',
    prazo: '',
  });

  useEffect(() => {
    getlistById();
  }, [])

  const { id } = useParams();

  const getlistById = async () => {
    try {
      const response = await Api.fetchGetById(id);
      if(response.status === 400) {
        console.log('Erro nos dados.Verique os campos para o preenchimento')
      }
      if(response.status === 500) {
        console.log('Erro no Servidor')
      }
      const list = await response.json();
      console.log('Retorno do API', list);
      setList(list);
    } catch(error) {
      console.log('ERROR', error);
    }
 
  };

  const handleFieldsChange = (evento) => {
    console.log(evento.target.titulo);
    const listEdit = {
      ...list
    }
    listEdit[evento.target.name] = evento.target.value;
    setList(listEdit);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const response = await Api.fetchPut(list, id);
    const data = await response.json();
    alert(data.message);

    navigate(`/view/${id}`);

  }

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <h3 className="m-3">Ediçao Tarefa do dia</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="titulo">Título</label>
                  <input
                    id="titulo"
                    className="form-control"
                    type="text"
                    placeholder="Digite tarefa do dia"
                    name="titulo"
                    value={list.titulo}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="descricao">Descrição</label>
                  <input
                  class="form-control z-depth-1" 
                  id='descricao' rows="1" 
                  type='text'
                  placeholder="Digite a descrição" 
                  name='descricao'
                  value={list.descricao}
                  onChange={handleFieldsChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    className="form-control"
                    type="text"
                    placeholder="Informe o status"
                    name="status"
                    value={list.status}
                    onChange={handleFieldsChange}
                  >
                    <option>Fazer</option>
                    <option>Fazendo</option>
                    <option>Feito</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="valor">Prioridade</label>
                  <select
                    id="prioridade"
                    className="form-control"
                    type="text"
                    placeholder="Digite a prioridade"
                    name="prioridade"
                    value={list.prioridade}
                    onChange={handleFieldsChange}
                  >
                    <option>Alta</option>
                    <option>Média</option>
                    <option>Baixa</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo</label>
                  <input
                    id="prazo"
                    className="form-control"
                    type='date'
                    name="prazo"
                    value={list.prazo}
                    onChange={handleFieldsChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button className="btn btn-success me-2" type="submit">
                  Enviar
                </button>
                <a href="/" class="btn btn-primary" role="button" aria-pressed="true">Voltar</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
