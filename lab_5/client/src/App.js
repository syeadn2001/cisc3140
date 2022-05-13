import './App.css';
import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Table from "./components/Table"
import Form from "./components/Form"
import SubmitForm from "./components/SubmitForm"

function App() {



  const [Data, setData] = useState([])
  const [carsData, setCarsData] = useState([])
  const [ownersData, setOwnersData] = useState([])
  const [fetchedOwner, setFetchedOwner] = useState([])
  const [fetchedOwnerID, setFetchedOwnerID] = useState(0)

  const [showAll, setShowAll] = useState(false)
  const [showCars, setShowCars] = useState(false)
  const [showOwners, setShowOwners] = useState(false)
  const [showFetch, setShowFetch] = useState(false)




  useEffect(() => {
    const getData = async () => {
      const data = await fetchData()

      setData(data.data)
    }
    getData()

  }, [])

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCars()

      setCarsData(data.data)
    }
    getData()

  }, [])

  useEffect(() => {
    const getData = async () => {
      const data = await fetchOwners()

      setOwnersData(data.data)
    }
    getData()

  }, [])


  const fetchData = async () => {
    const res = await fetch("http://localhost:8000/api/all")
    const data = await res.json()
    return data
  }

  const fetchCars = async () => {
    const res = await fetch("http://localhost:8000/api/cars")
    const data = await res.json()
    return data
  }

  const fetchOwners = async () => {
    const res = await fetch("http://localhost:8000/api/owners")
    const data = await res.json()
    return data
  }

  const fetchWithID = async (id) => {
    console.log(id)
    const res = await fetch(`http://localhost:8000/api/owners/${id.userID}`)
    console.log(res)
    const data = await res.json()
    console.log(data)
    setFetchedOwnerID(id)
    setFetchedOwner(data.data)
  }

  return (
    <div className="App">
      <Header />
      <SubmitForm searchForOwner={fetchWithID}
        clicked={() => setShowFetch(!showFetch)}
      />
      {showFetch && <Table table={fetchedOwner} id={fetchedOwnerID} />}

      <Form clickedAll={() => setShowAll(!showAll)}
        isAll={showAll}
        clickedCars={() => setShowCars(!showCars)}
        isCars={showCars}
        clickedOwners={() => setShowOwners(!showOwners)}
        isOwners={showOwners}

      />
      {showAll && <Table table={Data} id={-1} />}
      {showCars && <Table table={carsData} id={-1} />}
      {showOwners && <Table table={ownersData} id={-1} />}


    </div>
  );
}

export default App;
