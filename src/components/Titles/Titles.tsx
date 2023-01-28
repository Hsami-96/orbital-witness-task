import { CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTitles } from '../../data/dataFetcher';
import { Title } from '../../models/Title';
import TableRenderer from '../common/TableRenderer/TableRenderer';
import './Titles.css';

const Titles = () => {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState('')
  const [titlesResults, setTitleResults] = useState<Title[]>([])

  let search = window.location.search;
  let params = new URLSearchParams(search);
  const [currentPage, setCurrentPage] = useState(params.get('page') ? parseInt("" + params.get('page')): 0)
  
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

  const setPage = (page: number) => {
    setCurrentPage(page)
    navigate({
      pathname: '/',
      search: '?page=' + page
    })
  }

  const goToTitle = (titleNumber: number) => {
    let path = `title/${titleNumber}`; 
    navigate(path);
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
            <TableRenderer titleResults={titlesResults} currentPage={currentPage ?? 0} setPage={setPage} navigateTo={goToTitle}/>
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