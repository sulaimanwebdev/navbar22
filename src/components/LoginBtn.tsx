import { useState } from 'react';
import Popup from 'reactjs-popup';
import Button, { ButtonVariantTypes } from './Button'
// import 'reactjs-popup/dist/index.css';

// https://react-popup.elazizi.com/

export enum AuthModalMode {
    login = 'login',
    signup = 'signup',
}

export default function LoginBtn( ) {

    const [opened, setVisibility] = useState(false);
    const [mode, setMode] = useState(AuthModalMode.login); // login / signup

    return (
      <>
        <Popup open={opened} onOpen={() => setVisibility(true)} overlayStyle={{background: "rgba(0, 0, 0, 0.6)"}} trigger={<div className="flex items-center cursor-pointer"><span className=" text-lg mr-2 ">Login</span> <i className="far fa-user-alt text-lg "></i></div>} modal nested>
            <div className="modal">
                <div className="text-right mb-2">
                    <button className="close text-white rounded-full bg-grey-dark-3f text-3xl w-9" onClick={() => setVisibility(false)}>
                        &times;
                    </button>
                </div>
                <div className="content">
                    <div className="bg-grey-dark border-solid border-t-4 border-red">
                        {
                            mode == AuthModalMode.login ? 
                            (
                                <>
                                    <div className="pt-5 pb-8 text-center">
                                        <span className="font-gotham text-xl text-grey-light-f7">LOGIN</span>
                                    </div>
                                    <div className="bg-white p-5 text-center">
                                        <input type="text" name="username" placeholder="E-mail" className="border-solid border-2 border-grey-light-b2 p-2 block"/>
                                        <input type="password" name="password"  placeholder="Password" className="border-solid border-2 border-grey-light-b2 p-2 block mt-5"/>
                                        <Button variant={ButtonVariantTypes.primary} className="text-center block  mt-5" text={'LOGIN'} />

                                        <span className="block text-grey-dark-7b text-xs mt-10 ">Non sei ancora registrato?</span>
                                        <span className="block text-grey-dark text-sm font-bold mt-1 cursor-pointer"  onClick={() => setMode(AuthModalMode.signup)}>CREA UN ACCOUNT</span>

                                        <hr className="my-5"/>

                                        <span className="block text-grey-dark text-xs mt-1">Hai dimenticato la password?</span>
                                    </div>
                                </>
                             )
                            : 
                            ( 
                                <>
                                    <div className="pt-5 pb-8 text-center">
                                        <span className="font-gotham text-xl text-grey-light-f7">REGISTRATI</span>
                                    </div>
                                    <div className="bg-white p-5 text-center">
                                        <input type="text" name="name" placeholder="Nome" className="border-solid border-2 border-grey-light-b2 p-2 block"/>
                                        <input type="text" name="surname" placeholder="Cognome" className="border-solid border-2 border-grey-light-b2 p-2 block  mt-2"/>
                                        <input type="text" name="email" placeholder="E-mail" className="border-solid border-2 border-grey-light-b2 p-2 block  mt-2"/>
                                        <input type="password" name="password" placeholder="Password" className="border-solid border-2 border-grey-light-b2 p-2 block mt-2"/>
                                        <input type="password" name="password" placeholder="Conferma Password" className="border-solid border-2 border-grey-light-b2 p-2 block mt-2"/>
                                        <Button variant={ButtonVariantTypes.primary} className="text-center block  mt-5" text={'REGISTRATI'} />

                                        <hr className="my-5"/>

                                        <span className="block text-grey-dark-7b text-xs">Non sei ancora registrato?</span>
                                        <span className="block text-grey-dark text-sm font-bold mt-1 cursor-pointer" onClick={() => setMode(AuthModalMode.login)}>ACCEDI</span>
                                    </div>
                                </>
                             )
                        }
                    </div>
                </div>
            </div>
        </Popup>
      </>
    )
}