using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { set; get; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public string Time { get; set; }
        public string End { get; set; }
        public string Topic { get; set; }
        public string Description { get; set; }
        public string Organizer { get; set; }
        public string Location { get; set; }
    }
}
