export interface IPlayer {
  name: string;
  score: number;
}

export interface ITeam {
  name: string;
  score: number;
  players: IPlayer[];
}

export interface IState {
  teams: ITeam[];
}