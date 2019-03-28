export class Show {
  id: number;
  name: string;
  language: string;
  status: string;
  premiered: Date;
  image: { medium: string };
  summary: string;

  constructor(args?) {
    this.id = args.id;
    this.name = args.name;
    this.language = args.language;
    this.status = args.status;
    this.premiered = args.premiered;
    this.image = args.image;
    this.summary = args.summary;
  }
}
