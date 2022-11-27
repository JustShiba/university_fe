import Highlight from 'react-highlight';

const MainPage = () => {
  const str = `
  using System;
    using System.IO;
    class AJefRaskinBuckUp
    {
      static void Main(string[] args)
      {
        System.Console.WriteLine("Hi from AJefraskinBuckUp");
        FileInfo fi = new FileInfo("D:\\\\E\\\\0.txt");
        AFileCopy(fi);
        DirectoryContent();
      }
      static void AFileCopy(FileInfo f)
      {
        string s = ""; 
        s = "g:" + "\\\\" + f.DirectoryName.Substring(3);
        ATestDir(s);
        s += '\\\\' + f.Name;
        f.CopyTo(s, true);
        try
        {
          f.CopyTo(s, true);
        }
        catch (Exception ex) { Console.WriteLine(ex); }
      }
      static void ATestDir(string s)
      {
        DirectoryInfo d = new DirectoryInfo(s);
        if (d.Exists) return;
        d.Create();
        return;
      }
      static void DirectoryContent()
      {
        DirectoryInfo oD = new DirectoryInfo("D:\\\\E");
        Console.WriteLine("DIR:{0}\\n", oD.FullName.ToString());
        foreach (FileInfo f in oD.GetFiles())
        {
          Console.WriteLine("Filename: {0}", f.FullName);
          AFileCopy(f);
        }
        foreach (DirectoryInfo d in oD.GetDirectories())
        {
          AProcessDirs(d);
        }
      }
      static void AProcessDirs(DirectoryInfo oD)
      {
        foreach (FileInfo f in oD.GetFiles())
        {
          Console.WriteLine("Filename: {0}", f.FullName);
          AFileCopy(f);
        }
        foreach (DirectoryInfo d in oD.GetDirectories())
        {
          AProcessDirs(d);
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
export default MainPage;
