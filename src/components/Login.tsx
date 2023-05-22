import React, { useState } from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import './styles.css'
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog';


/*const Login = () => {
  return (
    <div>
      <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
</Card>
    </div>
  )
}

export default Login*/

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import Inscription from './Inscription';


export default function Login() {

    const legendTemplate = (
        <div className="flex align-items-center text-primary">
            <span className="pi pi-user mr-2"></span>
            <span className="font-bold text-lg">User Details</span>
        </div>
    );



    const [visible, setVisible] = useState<boolean>(false);
    const headers = (
        <div className='header'>
            <i className="pi pi-user" ></i>
            <p>Utilisateur</p>
        </div>

    );

    const footer = (
        <div>
            <Button label="Connexion" icon="pi pi-check" className='button' severity="success" />

            <Button label="Inscription" icon="pi pi-user-plus" className="p-button-outlined p-button-secondary" onClick={() => setVisible(true)} />

        </div>


    );
    const modalfooter = (
        <div>
             <Button label="Non" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Enregistrer" icon="pi pi-check" severity="success" onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    return (
        <div>
            <div className="cardName">

                <Card footer={footer} header={headers} className="card">
                    <InputText type="text" placeholder="Nom d'utilisateur" className='inputLogin' />
                    <InputText type="password" placeholder="Mot de passe" className='inputLogin' />


                </Card>

            </div>
            <div className="card flex justify-content-center">
                <Dialog header="Inscrivez-vous ici"  visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={modalfooter}>
                    <div className="card flex flex-column md:flex-row gap-3">
                        <div className="p-inputgroup flex-1">
                            <Button label="Nom" />
                            <InputText  />
                           
                            <Button label="Prénom" />
                            <InputText  />
                        </div>

                        <div className="p-inputgroup flex-1">
                           
                        </div>

                        <div className="p-inputgroup flex-1">
                            <Button label="Nom d'utilisateur" />
                            <InputText  />

                            <Button label="Email" />
                            <InputText  />

                        </div>
                        <div className="p-inputgroup flex-1">
                          
                        </div>

                        <div className="p-inputgroup flex-1">
                            <Button label="Mot de passe" />
                            <InputText type="password" />
                        </div>

                       
                    </div>
                </Dialog>
            </div>
        </div>

    )
}

