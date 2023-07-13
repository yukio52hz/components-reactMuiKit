import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Modal, NavBar, SearchFilter } from './components'
import { Avatar, Button, Grid, Typography } from '@mui/material'

import { FormChain } from './FormChain'
import { AlertDelete } from './components/AlertDelete'

import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { red } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search'
import { Pager } from './components/Pager'
import HomeIcon from "@mui/icons-material/Home"
import AppsIcon from '@mui/icons-material/Apps'
import LogoutIcon from "@mui/icons-material/Logout"
import empty_perfil from "./assets/img/empty_perfil.svg"
import SettingsIcon from "@mui/icons-material/Settings"
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
  const translateTextMenu = (text: string | undefined): string => {
    return `uwu - ${text}`
  };
  const [countPages, setCounPages] = useState(0);
  return (
    <div className="App">
      <NavBar apps={[{
        name: 'Home',
        url: "/",
        client_id: "erp"
      }, {
        name: 'figma',
        url: "https://www.figma.com/file/se7jc6cSkr5fapFcdppQvU/Acciones-de-personal-%2F-PAF?type=design&node-id=0-1&mode=design&t=1NXKKygBGKnKuI5B-0",
        client_id: "erp"
      }]}
        menuNavbarIcons={{ "erp": <HomeIcon fontSize="small" color="primary" /> }}
        navBarTexts={{
          titleMenu: "change to",
          generalOption: "geraloption",
          nameSystem: "erp systen",
          btnLogout: "salir",
          userName: "farid Gamboa matarrita"
        }} menuNavbarIcon={<AppsIcon />}
        appBarStyle={{ background: "#3E6CC1" }}
        logoutIcon={<LogoutIcon />}
        settingsIcon={<SettingsIcon />}
        /* avatarIcon={<Avatar
          alt="Remy Sharp"
          src={empty_perfil}
          sx={{ width: 30, height: 30, textAlign: "center", marginRight: "0.7rem" }}

        />} */ btnLogoutStyle={{
          color: "#4E83E3", backgroundColor: "white", "&:hover": {
            backgroundColor: "white"
          }
        }}
        btnMenuStyle={{
          mr: 2, transform: "rotate(45deg)", "&:focus-visible": {
            outline: "none"
          }, "&:focus": {
            outline: "none"
          }
        }}
        translateTextMenu={translateTextMenu}
      />
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

      <Grid container>
        <Grid item xs={12}>
          <SearchFilter wordForSearh={paginationFilters}
            iconSearch={<SearchIcon sx={{ color: "#4E83E3" }} />}
            searchStyle={{ background: "#E0EBFF" }}
            size="medium"
          />
        </Grid>
      </Grid>
      <AlertDelete
        icon={<ReportProblemIcon sx={{ fontSize: 50, color: red[500] }} />}
        close={handleModalClose}
        open={false}
        agreeDelete={agreeDelete}
        titleModal={<Typography fontSize={20}>Eliminar</Typography>}
        bodyContent={<>Se borraran todos los datos referentes a este registro de forma pertenente.<br /><br />Desea proceder</>}
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
