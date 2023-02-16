import { slice } from "./slice";

const { reducer } = slice;

export * from "./actions";
export * as notesSelectors from "./selectors";

export default reducer;
