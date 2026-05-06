using RewardForJustice.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Simple data in memory instead of database or JSON file
List<WantedPerson> wantedPeople = new()
{
    new WantedPerson
    {
        Id = 1,
        Name = "Viktor Morozov",
        Alias = "The Ghost",
        Crime = "Arms Trafficking, Money Laundering",
        Description = "Former intelligence operative turned arms dealer.",
        Nationality = "Russian",
        LastSeen = "Eastern Europe",
        Reward = 5000000,
        Danger = "Extreme"
    },
    new WantedPerson
    {
        Id = 2,
        Name = "Camila Reyes",
        Alias = "La Sombra",
        Crime = "Drug Trafficking, Murder",
        Description = "Senior cartel logistics coordinator.",
        Nationality = "Colombian",
        LastSeen = "Central America",
        Reward = 3000000,
        Danger = "High"
    },
    new WantedPerson
    {
        Id = 3,
        Name = "Tariq Al-Rashid",
        Alias = "Al-Sayf",
        Crime = "Terrorism Financing, Cybercrime",
        Description = "Financial architect behind multiple networks.",
        Nationality = "Unknown",
        LastSeen = "Middle East",
        Reward = 7500000,
        Danger = "Extreme"
    },
    new WantedPerson
    {
        Id = 4,
        Name = "Dmitri Volkov",
        Alias = "The Architect",
        Crime = "Cyberterrorism, Infrastructure Attacks",
        Description = "Hacker responsible for attacks on computer systems.",
        Nationality = "Russian",
        LastSeen = "Unknown",
        Reward = 4000000,
        Danger = "Extreme"
    },
    new WantedPerson
    {
        Id = 5,
        Name = "Jomo Okafor",
        Alias = "Commander Zero",
        Crime = "War Crimes, Human Trafficking",
        Description = "Militia commander wanted for serious crimes.",
        Nationality = "Nigerian",
        LastSeen = "West Africa",
        Reward = 2500000,
        Danger = "High"
    }
};

// Messages are saved here while the project is running
List<ContactMessage> messages = new();

// GET /api/wanted
app.MapGet("/api/wanted", () => wantedPeople);

// POST /api/contact
app.MapPost("/api/contact", (ContactMessage message) =>
{
    if (string.IsNullOrWhiteSpace(message.Message))
    {
        return Results.BadRequest(new { error = "Message is required." });
    }

    messages.Add(message);

    return Results.Ok(new { success = true, text = "Your tip has been received. Thank you." });
});

// GET /api/contact
// Open this link to see the messages saved in memory
app.MapGet("/api/contact", () => messages);

app.Run();
