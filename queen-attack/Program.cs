using System;
using Chess;

class Program{
  public static void Main()
  {
    Queen flynn = new Queen();
    Console.WriteLine("Please enter a queen x coordinate: ");
    int qx = int.Parse(Console.ReadLine());
    Console.WriteLine("Please enter a queen y coordinate: ");
    int qy = int.Parse(Console.ReadLine());
    Console.WriteLine("Please enter a player x coordinate: ");
    int px = int.Parse(Console.ReadLine());
    Console.WriteLine("Please enter a player y coordinate: ");
    int py = int.Parse(Console.ReadLine());

    if(flynn.Attackable(qx,qy,px,py)){
      Console.WriteLine("You sunk my battleship!!!");
    }
    else{
      Console.WriteLine("Go Fish!! #$%^*&^");
    }
  }
  

}