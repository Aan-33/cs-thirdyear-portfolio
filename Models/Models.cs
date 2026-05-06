namespace RewardForJustice.Models;

// This model represents one wanted person in the website
public class WantedPerson
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Alias { get; set; } = "";
    public string Crime { get; set; } = "";
    public string Description { get; set; } = "";
    public string Nationality { get; set; } = "";
    public string LastSeen { get; set; } = "";
    public int Reward { get; set; }
    public string Danger { get; set; } = "High";
}

// This model represents the message sent from the Contact page
public class ContactMessage
{
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
    public string Message { get; set; } = "";
}
