import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import formationReducer from './formation.reducer';
import offerReducer from './offer.reducer';
import participationReducer from './participation.reducer';
import SubscriptionReducer from './subscriptions.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  offer: offerReducer,
  formations: formationReducer,
  participation: participationReducer,
  subscriptions: SubscriptionReducer,
});

export default rootReducer;
