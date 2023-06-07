'use client';

async function getData() {

  try {
    const res = await fetch('http://localhost:3000/pessoas', {
      cache: "no-store"
    }
    ).then(data => data.json());

    return res;
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

async function deleteData(id) {
  try {
    console.log(id)
    const res = await fetch('http://localhost:3000/pessoa', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": id
      })
    })

    return res
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">Id</th>
                    <th scope="col" className="px-6 py-4">Nome</th>
                    <th scope="col" className="px-6 py-4">Idade</th>
                    <th scope="col" className="px-6 py-4">Horário</th>
                    <th scope="col" className="px-6 py-4">Peso</th>
                    <th scope="col" className="px-6 py-4">Altura</th>
                    <th scope="col" className="px-6 py-4">Gênero</th>
                    <th scope="col" className="px-6 py-4">Tamanho Máx. do Mar</th>
                    <th scope="col" className="px-6 py-4">Nacionalidade</th>
                    <th scope="col" className="px-6 py-4">Local</th>
                    <th scope="col" className="px-6 py-4">Anos de Experiência</th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(res => (
                    <tr
                      key={res.id}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{res.id}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.nome}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.idade}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.horario}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.peso}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.altura}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.genero}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.tamanhomarmax}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.nacionalidade}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.local}</td>
                      <td className="whitespace-nowrap px-6 py-4">{res.experiencia}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          onClick={(e) => {deleteData(res.id); window.alert("O aluno foi deletado, recarregue a página!")}}
                          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                          Deletar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
