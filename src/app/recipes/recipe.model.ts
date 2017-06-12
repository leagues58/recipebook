export class Recipe {

  // public variables
  public name: string;
  public description: string;
  public imagePath: string;


  // constructor
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
