import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Modal, SearchFilter } from './components'
import { Button, Typography } from '@mui/material'

import { FormChain } from './FormChain'
import { AlertDelete } from './components/AlertDelete'

import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { red } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search'
import { Pager } from './components/Pager'
function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setOpen] = useState(false)
  const handleModalClose = () => {
    setOpen(false)
  }
  const openModal = () => {
    setOpen(true)
  }
  const agreeDelete = () => {
    console.log('objeto eliminado')
  }
  const paginationFilters = (prop: string[]) => {
    console.log(prop)
  };
  const [countPages, setCounPages] = useState(0);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <SearchFilter wordForSearh={paginationFilters}
        iconSearch={<SearchIcon />}
      />
      <AlertDelete
        icon={<ReportProblemIcon sx={{ fontSize: 50, color: red[500] }} />}
        close={handleModalClose}
        open={false}
        agreeDelete={agreeDelete}
        titleModal={<Typography fontSize={20}>Eliminar</Typography>}
        bodyText={<>Se borraran todos los datos referentes a este registro de forma pertenente.<br/><br/>Desea proceder</>}
      />
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
      >
        <FormChain action='create' closeModal={handleModalClose} />
      </Modal>
      <Button onClick={openModal}>modal</Button>
      <Pager count={20}
        perPage={5}
        paginationChange={paginationFilters} />
    </div>
  )
}

export default App
