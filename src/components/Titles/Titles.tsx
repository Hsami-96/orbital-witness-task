import { CircularProgress, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useEffect, useState } from 'react';
import { fetchTitles } from '../../data/dataFetcher';
import { Title } from '../../models/Title';
import TableRenderer from '../common/TableRenderer/TableRenderer';
import './Titles.css'

const Titles = () => {
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState('')
  const [titlesResults, setTitleResults] = useState<Title[]>([])
  
  const getData = async () => {
    try {
      setLoader(true)
      const resultData = await fetchTitles();
      setTitleResults(resultData)
    } catch (e) {
      if (typeof e === "string") {
        setError(e.toUpperCase())
      } 
      else if (e instanceof Error) {
        setError(e.message)
      }
    }
    finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  
  const renderLoader = () => {
    return (
      <div className="loaderIcon"><CircularProgress/></div>
    )
  }

  const renderError = () => {
    return (
      <div className="errorContainer">
        <h1>Error</h1>
        <h2>Message: {error}</h2>
      </div>
    )
  }
  
  return (
    <>
    {
      loader ? (renderLoader()) :
      error ? (renderError()) :
      <>
      <Typography>All Titles</Typography>
      <div className="titlesContainer">
        {
         ( titlesResults && titlesResults.length > 0) ? (
            <TableRenderer titleResults={titlesResults}/>
         ) :
         <h1>No Titles to render...</h1>
        }
      </div>
      </>
    }
    </>
   
  )
}

export default Titles