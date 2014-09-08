using System;
using System.Collections;
using System.Collections.Generic;
using PrediLiga.Domain.Entities;

namespace PrediLiga.domain.Entities
{
    public class League : IEntity
    {
        public virtual long Id { get; set; }
        public virtual bool IsArchived { get; set; }

        public virtual string Name { get; set; }

        public virtual DateTime Day { get; set; }

        public virtual IEnumerable<Team> Teams { get; set; }

        public virtual IEnumerable<Match> Matches { get; set; }
    }
}