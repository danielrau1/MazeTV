export class Episode {
  id: number;
  name: string;
  number: number;
  airdate: Date;
  airtime: string;
  season: number;
  summary: string;

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.number = args.number;
    this.airdate = args.airdate;
    this.airtime = args.airtime;
    this.summary = args.summary;
  }
}
