async function getData() {

  try {
    const res = await fetch('http://localhost:3000/pessoas',{
      cache:"no-cache"
    }
    ).then(data => data.json());
    
    return res;
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
                  </tr>
                </thead>
                <tbody>
                  {data.map(res => (
                    <tr
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{res.id}</td>
                    <td className="whitespace-nowrap px-6 py-4">{res.nome}</td>
                    <td className="whitespace-nowrap px-6 py-4">{res.idade}</td>
                    <td className="whitespace-nowrap px-6 py-4">{res.horario}</td>
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
