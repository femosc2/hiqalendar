using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend
{
    public class DataGenerator
    {
        Random rand;
        Dictionary<string, List<string>> values;

        public DataGenerator()
        {
            rand = new Random();
            values = new Dictionary<string, List<string>>
            {
                {"times", new List<string> { "02:00", "08:00", "10:30", "12:45", "15:20", "18:00", "23:11" }},
                {"description", new List<string> { "an awesome event", "we do this every day!", "kinda boring event", "lunch", "after work", "lorem ipsum",
                    "fix all the bugs, all of them, in the world", "we eat icecream", "beer tasting", "Do you need a description? The tilte says it all",
                    "pwning noobs", "game night", "don't go to this one", "definitely go to this one", "lol" }},
                {"location", new List<string> { "Hiq Malmö", "The moon", "Atlantis", "Stockholm", "New York", "My House",  }},

            };
        }

        public Event[] generateEvents(int amount)
        {
            Event[] events = new Event[amount];
            for (int i = 0; i < amount; i++)
            {
                Event ev = new Event
                {
                    Id = i,
                    Name = "Event number " + rand.Next(1, 500),
                    Day = rand.Next(1, 30),
                    Month = rand.Next(0, 11),
                    Year = 2019,
                    Time = pickRandom("times"),
                    End = pickRandom("times"),
                    Description = pickRandom("description"),
                    Organizer = "HiQ",
                    Location = pickRandom("location")

                };
                events[i] = ev;
            }
            return events;
        }

        private string pickRandom(string key)
        {
            List<string> options = values.GetValueOrDefault(key);
            return options[(int)Math.Floor(rand.NextDouble() * options.Count)];
        }
    }
}
