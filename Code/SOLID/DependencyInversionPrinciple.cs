namespace Practise.SOLID;

internal class DependencyInversionPrincipleViolation
{
    public class EmailService
    {
        public void SendEmail()
        {
            Console.WriteLine("Email sent");
        }
    }

    public class SmsService
    {
        public void SendSms()
        {
            Console.WriteLine("Sms sent");
        }
    }

    public class NotificationService
    {
        private readonly EmailService _emailService;
        public NotificationService()
        {
            _emailService = new EmailService();
        }
        public void SendNotification()
        {
            _emailService.SendEmail();
        }
    }
}


internal class DependencyInversionPrinciple
{
    public interface IMessageService
    {
        void SendMessage();
    }

    public class EmailService : IMessageService
    {
        public void SendMessage()
        {
            Console.WriteLine("Email sent");
        }
    }

    public class SmsService : IMessageService
    {
        public void SendMessage()
        {
            Console.WriteLine("Sms sent");
        }
    }

    public class NotificationService
    {
        private readonly IMessageService _messageService;
        public NotificationService(IMessageService messageService)
        {
            _messageService = messageService;
        }
        public void SendNotification()
        {
            _messageService.SendMessage();
        }
    }
}