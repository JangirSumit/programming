namespace Practise.Programming;

internal class DirectoryExplorer
{
    private const string spacer = "   ";
    private string space = "";
    private string directorySpace = "";

    public void Explore(string path)
    {
        Task.Run(async () => await ExploreAsync(path)).Wait();
    }

    private async Task ExploreAsync(string path)
    {
        if (Path.Exists(path))
        {
            foreach (var file in Directory.GetFiles(path))
            {
                await Task.Delay(200);
                Console.WriteLine($"{space}{file}");
            }

            foreach (var directory in Directory.GetDirectories(path))
            {
                Console.WriteLine($"\n{directorySpace}=>{directory}");
                space = space + spacer;
                await ExploreAsync(directory);
                directorySpace += spacer;
            }
        }
    }
}
