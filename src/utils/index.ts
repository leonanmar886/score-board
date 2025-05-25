import { IPlayer } from "@app/interfaces";

function sortPlayersByScore(players: IPlayer[]) {
  return players.sort((a, b) => b.score - a.score);
}

export default sortPlayersByScore;