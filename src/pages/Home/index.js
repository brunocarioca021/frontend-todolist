import React from 'react';
import Lists from '../../components/structure/Lists';

const Home = () => {
  return(
    <div className="container">
      <h1 className="text-center h1 mt-3">Tarefa do Dia</h1>
      <Lists/>
    </div>
  )
}

export default Home;