const ActionType = {
  CHANGE_CITY: `city/changeCity`
};

const ActionCreator = {
  changeCity: (evt) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      city: evt.target.textContent,
    }
  })
}

export {ActionType, ActionCreator};
