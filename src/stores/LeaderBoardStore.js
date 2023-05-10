import { defineStore } from "pinia";
import axios from "axios";

export const useLeaderBoardStore = defineStore( "leaderBoardStore", {
  state: () =>
  {
    return {
      leaderBoard: [],
    };
  },
  actions: {
    //GET
    async users ()
    {
      try
      {
        const response = await axios.get( "https://randomuser.me/api/", {
          params: {
            results: 10,
          },
        } );
        this.leaderBoard = response.data.results;
        this.leaderBoard.forEach( ( user ) =>
        {
          user.all = Math.floor( Math.random() * 800000 ) + 5000;
          user.week = Math.floor( Math.random() * 20000 ) + 1000;
        } );
        console.log( 'leaderBoard: ', this.leaderBoard );
      } catch ( error )
      {
        console.log( 'error: ', error );
        throw error
      }
    },
  },
} );
