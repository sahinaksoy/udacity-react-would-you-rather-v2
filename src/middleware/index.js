import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();
export default applyMiddleware(thunk, loggerMiddleware);
