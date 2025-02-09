namespace Practise.DesignPatterns.Micro_services;

internal class CircuitBreakerService
{
    // Circuit breaker pattern is used to prevent the system from repeatedly trying to execute an operation that is likely to fail.
    public interface ICircuitBreaker
    {
        void Execute();
    }

    private enum CicuitState
    {
        Open,//Not well
        Close,//All well
        HalfOpen//Trying to recover
    }

    public class CircuitBreaker : ICircuitBreaker
    {
        private readonly int _failureThreshold;
        private readonly int _timeout;
        private int _failureCount;
        private DateTime _lastFailureTime;
        private CicuitState _state;

        public CircuitBreaker(int failureThreshold, int timeout)
        {
            _failureThreshold = failureThreshold;
            _timeout = timeout;
        }
        public void Execute()
        {
            if (_state == CicuitState.Open && (DateTime.Now - _lastFailureTime).TotalSeconds > _timeout)
            {
                _state = CicuitState.HalfOpen;
                Console.WriteLine("Circuit is half open");
            }
            else
            {
                if (_failureCount >= _failureThreshold && (DateTime.Now - _lastFailureTime).TotalSeconds < _timeout)
                {
                    _state = CicuitState.Open;
                    Console.WriteLine("Circuit is open");
                    return;
                }
                try
                {
                    // Execute the operation
                    Console.WriteLine("Operation executed successfully");
                    _failureCount = 0;
                    _state = CicuitState.Close;
                }
                catch (Exception)
                {
                    _state = CicuitState.HalfOpen;
                    _failureCount++;
                    _lastFailureTime = DateTime.Now;
                    Console.WriteLine("Operation failed");
                }
            }
        }
    }
}
