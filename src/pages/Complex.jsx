import Highlight from 'react-highlight';

const ComplexPage = () => {
  const str = `
  namespace ConsoleApp1
  {
    class Complex
    {
      public float x;
      public float y;
      public Complex(float x, float y)
      { 
        this.x = x;
        this.y = y;
      }

      public Complex Add(Complex c1, Complex c2)
      {
        Complex c3 = new Complex(0, 0);
        c3.x = c1.x + c2.x;
        c3.y = c1.y + c2.y;
        return c3;
      }

      static public Complex operator +(Complex c1, Complex c2)
      {
        Complex c3 = new Complex(0, 0);
        c3.x = c1.x + c2.x;
        c3.y = c1.y + c2.y;
        return c3;
      }

      static public Complex operator -(Complex c1, Complex c2)
      {
        Complex c3 = new Complex(0, 0);
        c3.x = c1.x + c2.x;
        c3.y = c1.y + c2.y;
        return c3;
      }


      class Program
      {
        static void Main(string[] args)
        {
          Complex c1 = new Complex(1, 1);
          Complex c2 = new Complex(2, 2);
          Complex c3 = new Complex(c1.x + c1.y, c2.x + c2.y);
          c3 = c1.Add(c1, c2);
          c3 = c1 - c2;
          
          Console.WriteLine("Complex c1=({0}, {1}) c2=({2}, {3})", c1.x, c1.y, c2.x, c2.y);
          Console.WriteLine("Complex c3=({0}, {1})", c3.x, c3.y);
        }
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

export default ComplexPage;
