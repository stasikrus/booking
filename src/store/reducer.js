import { offersData } from "../mocks/offers";
import { ActionType } from "./action";

const initialState = {
  city: `Amsterdam`,
  offers: offersData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        city: action.payload,
        // offers: //Функция по поиску предложений в выбранном городе
      }
  }

  return state;
};

export {reducer};
