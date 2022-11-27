import Highlight from 'react-highlight';

const RabbitsPage = () => {
  const str = `
  using System;
    class ARabbits
    {
      Rabbit[] data;
      public ARabbits()
      {
        data = new Rabbit[13];
      }
      public Rabbit this[int index]
      {
        get {                
          return data[index];
        }
        set {
          data[index] = value;
        }
      }
    }
    class Rabbit
    {
      override public int GetHashCode()
      {
        return (this.GetType()).GetHashCode();
      }
      override public bool Equals(object o)
      {
        bool b = o is Rabbit;
        return b;
      }
    }
    public class Program
    {
      public static void Main()
      {
        Rabbit a = new Rabbit();
        Rabbit b = new Rabbit();
        Console.WriteLine("a="+a.GetHashCode()+ " b="+b.GetHashCode());
        Console.WriteLine(a.Equals(b));
        ARabbits rs= new ARabbits();
        rs[0]=a;
        rs[1]=b;
        for (int i = 0; i < 2; i++)
        {
          Console.WriteLine(rs[i].GetHashCode());
        }
      }
    }
`;
  return (
    <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
      <Highlight className="csharp monokai-sublime">
        {str}
      </Highlight>
    </div>
  );
};

export default RabbitsPage;
