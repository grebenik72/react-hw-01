import React from 'react';
import { Profile } from "./Profile";
import user from "../user.json";
import data from "../data.json";
import friends from './Friends/friends.json';
import transactions from "./transactions.json";
import { Statistics } from "./Statistics";
import { GlobalStyle } from "./GlobalStyle";
import { TransactionHistory } from "./TransactionHistory";
import { FriendList } from "./Friends/FriendList/FriendList";

export const App = () => {
  return (
    <div>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </div>
  );
};
