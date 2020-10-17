import { authState } from './reducers/authSlice';
import { startTimeState } from './reducers/startTimeSlice'; 

export default interface State {
	auth: authState,
	startTime: startTimeState
}
