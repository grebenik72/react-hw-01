import { Profile } from "./Profile";
import user from "../user.json";
import data from "../data.json";
import { Statistics } from "./Statistics";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <div>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <GlobalStyle/>
    </div>
  );
};
