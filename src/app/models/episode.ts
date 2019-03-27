export class Episode {
  dt: string;
  timeDiff: number;
  dec: boolean;

  constructor(public airdate: string, public airtime: string, public timeDiff: number, public dec: boolean ) {
this.dt = this.airdate + 'T' + this.airtime;
this.timeDiff = timeDiff;
this.dec = dec;
  }



}
