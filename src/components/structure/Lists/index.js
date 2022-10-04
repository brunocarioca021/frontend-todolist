import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Api from '../../../api/api';

const Lists = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
      getLists();
    }, [])
  
    const getLists = async () => {
      try {
        const response = await Api.fetchGetAll();
        if(response.status >= 400 && response.status < 500) {
          alert('Dados não acessiveis,verifique sua api')
        }
        const listsApi = await response.json();
        console.log('RESPOSTA DA API', listsApi);
        setLists(listsApi);
      }catch (error) {
        console.log('ERRO', error);
      }
      
    }
    return(
      <div>
        <p className='text-center h5'>LISTA DO DIA</p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            lists.map((list) => (
              <Card key={list._id} list={list}/>
            ))
          }
  
        </div>
      </div>
    )
  }
  export default Lists;