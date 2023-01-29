import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTitle } from "../../data/dataFetcher";
import { Title } from "../../models/Title";
import MapRenderer from "../common/MapRenderer/MapRenderer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./TitleDetails.css";

const initialTitle = {
  propertyAddress: "",
  tenure: "",
  titleNumber: "",
  xCoordinate: 0,
  yCoordinate: 0,
};
const TitleDetails = () => {
  const navigate = useNavigate();
  const { titleNumber } = useParams();
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const [titleResults, setTitleResults] = useState<Title>(initialTitle);

  const getData = async () => {
    try {
      setLoader(true);
      const resultData = await fetchTitle(titleNumber ?? "");
      setTitleResults(resultData);
    } catch (e) {
      if (typeof e === "string") {
        setError(e.toUpperCase());
      } else if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderLoader = () => {
    return (
      <div className="loaderIcon">
        <CircularProgress />
      </div>
    );
  };

  const renderError = () => {
    return (
      <div className="errorContainer">
        <h1>Error</h1>
        <h2>Message: {error}</h2>
      </div>
    );
  };
  return (
    <>
      {loader ? (
        renderLoader()
      ) : error ? (
        renderError()
      ) : (
        <>
          <div className="titleDetailsContainer">
            {titleResults ? (
              <>
                <div className="detailsContainer">
                  <ArrowBackIcon className="backBtn" data-testid='backBtn' onClick={() => navigate(-1)}/>
                  <div className="titleNumberContainer">
                    <h3 className="titleNumber">
                      {titleResults.titleNumber}
                      <span
                        className={
                          titleResults.tenure === "Freehold"
                            ? "tenure freehold"
                            : "tenure leasehold"
                        }
                      >
                        {titleResults.tenure}
                      </span>
                    </h3>
                  </div>
                  <div className="infoContainer">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
                <div className="mapContainer">
                  <MapRenderer titleData={titleResults} />
                </div>
              </>
            ) : (
              <h1>No Titles to render...</h1>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TitleDetails;
