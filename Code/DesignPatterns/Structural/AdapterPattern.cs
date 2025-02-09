namespace Practise.DesignPatterns.Structural;

internal class AdapterPattern
{
    // Incompatible objects are made compatible by using an adapter.
    public interface IVideoPlayer
    {
        void Play();
        void Stop();
    }

    public class ThirdPartyPlayer
    {
        public void Play()
        {
            Console.WriteLine("Play Video");
        }

        public void Stop()
        {
            Console.WriteLine("Stop Video");
        }
    }

    public class IMyPlayer : IVideoPlayer
    {
        private readonly ThirdPartyPlayer _thirdPartyPlayer;
        public IMyPlayer(ThirdPartyPlayer thirdPartyPlayer)
        {
            _thirdPartyPlayer = thirdPartyPlayer;
        }
        public void Play() => _thirdPartyPlayer.Play();
        public void Stop() => _thirdPartyPlayer.Stop();
    }
}
