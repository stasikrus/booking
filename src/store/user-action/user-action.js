import { ActionType } from "../action";
import { AuthorizationStatus } from "../../const";

const DEFAULT_CITY = `Amsterdam`;

const initialState = {
  city: DEFAULT_CITY,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null
};

const userAction = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        isDataLoaded: true
      };
  }

  return state;
};

export {userAction};
