import { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from "../const";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsList } from "../store/api-actions";
import { useHistory } from "react-router-dom";
import { findOfferById } from '../utils';
import { getDefaultOffers } from '../store/selectors';

const useOfferData = (id) => {
  const [offer, setOffer] = useState(null);
  const [offersNear, setOffersNear] = useState(null);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const dispatch = useDispatch();
  const defaultOffers = useSelector(getDefaultOffers);

  useEffect(() => {
    const offerFromState = findOfferById(defaultOffers, +id);

    const fetchData = async () => {
      try {
        if (offerFromState) {
          setOffer(offerFromState);
        } else {
          const offerResponse = await axios.get(`${BACKEND_URL}/hotels/${id}`);
          setOffer(offerResponse.data);
        }

        const offersNearResponse = await axios.get(
          `${BACKEND_URL}/hotels/${id}/nearby`
        );
        setOffersNear(offersNearResponse.data);

        dispatch(fetchCommentsList(id)).then(() => setLoading(false));
      } catch (error) {
        if (error.response && error.response.status === 404) {
          history.push("/not-found");
        } else {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [id, defaultOffers]);

  return { offer, offersNear, loading };
};

export default useOfferData;
