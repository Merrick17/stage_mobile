import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import formationReducer from './formation.reducer';
import offerReducer from './offer.reducer';
import participationReducer from './participation.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  offer: offerReducer,
  formations: formationReducer,
  participation: participationReducer,
});

export default rootReducer;
