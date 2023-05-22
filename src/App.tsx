import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Login from './components/Login';
import axios from 'axios';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
role = [5, "salohy"];



interface Iquestionnaire {
  id: number;
  rang: number;
  descriptions: string;
  typesChamp: {
    id: number
    nomChamp: string
  };
  departements: {
    id: number
    nomDepartement: string
  };
}



const defaultQuestionnaire: Iquestionnaire[] = [];


const App: React.FC = () => {

  const [questionnaires, setQuestionnaires]: [Iquestionnaire[], (questionnaires: Iquestionnaire[]) => void] = React.useState(defaultQuestionnaire);

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(String);

  useEffect(() => {
    /*  setLoading(true);
  
      fetch('/api/testReact/quest')
        .then(response => response.json())
        .then(datass => {
          setDatas(datass);
          setLoading(true);
         console.log(datass);
        })*/
    axios
      .get<Iquestionnaire[]>("/api/testReact/quest", {
        headers: {
          "Content-Type": "application/json",
          //'Authorization': "Bearer " + yourToken
        },

      })
      .then(response => {
        setQuestionnaires(response.data);
        setLoading(true);
      })
      .catch(ex => {
        console.log(ex.response.status)
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(true);
      });
  }, []);


  if (!loading) {

    return <p>Loading...</p>;
  }


  return (
    <div className="App">
      <Login />

      <div className="Apps">
        <h2>Questionnaire référence</h2>
        {questionnaires.map((questionnaire) => (
          <div key={questionnaire.id}>
            <p>{questionnaire.descriptions}</p>
            <p>{questionnaire.typesChamp.nomChamp}</p>
            <p>{questionnaire.departements.nomDepartement}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

type Person = {
  name: string;
  age?: number;
}

let person: Person = {
  name: "salohy",
};


function printName(name: string) {
  console.log(name);
}


/*function App() {
  return (
    <div className="App">
     <h1>Hello world {role}</h1>
    </div>
  );
}*/

export default App;
