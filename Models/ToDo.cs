using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TickTaskDoe.Models
{
    public class ToDo
    {
        public int Id { get; set; }

        public string Desc { get; set; }

        public bool Done { get; set; }

        public virtual ApplicationUser User { get; set; }

    }
}