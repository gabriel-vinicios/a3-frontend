'use client';

import React from "react";

async function setData(props) {
    try {
        const res = await fetch('http://localhost:3000/pessoa', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': "*",
                "Access-Control-Allow-Headers": true
            },
            mode: "cors", // no-cors, *cors, same-origin
            body: {
                "nome": props?.nome,
                "idade": props?.idade,
                "horario": props?.horario
            },
        })

        return res;
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export default function Page() {
    const [fields, setFields] = React.useState({ nome: "", idade: 0, horario: "" });

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
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-64" onSubmit={(e) => preventDefault(e, fields)}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Nome
                                        </label>
                                        <input
                                            onChange={(e) => setFields({ ...fields, nome: e.target.value })}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Idade
                                        </label>
                                        <input
                                            onChange={(e) => { setFields({ ...fields, idade: e.target.value }) }}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Horário
                                        </label>
                                        <input
                                            onChange={(e) => setFields({ ...fields, horario: e.target.value })}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="time" placeholder="" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                            Sign In
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