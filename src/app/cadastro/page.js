'use client';

import React from "react";

async function setData(props) {
    try {
        console.log(props)
        const res = await fetch('http://localhost:3000/pessoa', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nome": props?.nome,
                "idade": props?.idade,
                "horario": props?.horario
            }),
        })

        return res;
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export default function Page() {
    const [fields, setFields] = React.useState({ 
        nome: "", 
        idade: 0, 
        horario: "", 
        peso: 0, 
        altura: 0, 
        tamanhomarmax: 0, 
        nacionalidade: "",
        experiencia: 0
    });

    const preventDefault = async (event, fields) => {
        event.preventDefault()
        await setData(fields)

    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <div className="w-full max-w-xs">
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8" onSubmit={(e) => preventDefault(e, fields)}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Nome
                                        </label>
                                        <input
                                        value={fields.nome}
                                            onChange={(e) => setFields({ ...fields, nome: e.target.value })}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Idade
                                        </label>
                                        <input
                                            min="1"
                                            step="1"
                                            value={fields.idade}
                                            onChange={(e) => { setFields({ ...fields, idade: e.target.value }) }}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Horário
                                        </label>
                                        <input
                                            value={fields.horario}
                                            onChange={(e) => setFields({ ...fields, horario: e.target.value })}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="time" placeholder="" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Anos de Experiência
                                        </label>
                                        <input
                                            min="1"
                                            step="1"
                                            value={fields.experiencia}
                                            onChange={(e) => { setFields({ ...fields, experiencia: e.target.value }) }}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Nacionalidade
                                        </label>
                                        <input
                                            value={fields.nacionalidade}
                                            onChange={(e) => setFields({ ...fields, nacionalidade: e.target.value })}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Peso(em Kg)
                                        </label>
                                        <input
                                            min="1"
                                            step="any"
                                            value={fields.peso}
                                            onChange={(e) => { setFields({ ...fields, peso: e.target.value }) }}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Altura (em metros)
                                        </label>
                                        <input
                                            min="1"
                                            step="any"
                                            value={fields.altura}
                                            onChange={(e) => { setFields({ ...fields, altura: e.target.value }) }}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Tamanho Máximo do Mar<br/>
                                            (em metros)
                                        </label>
                                        <input
                                            min="1"
                                            step="any"
                                            value={fields.tamanhomarmax}
                                            onChange={(e) => { setFields({ ...fields, tamanhomarmax: e.target.value }) }}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                            Cadastrar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}