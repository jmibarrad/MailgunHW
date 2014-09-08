using System;
using PrediLiga.Domain.Entities;

namespace PrediLiga.domain.Entities
{
    public class Match : IEntity
    {
        public virtual long Id { get; set; }
        public virtual bool IsArchived { get; set; }

        public virtual Team Team1 { get; set; }

        public virtual Team Team2 { get; set; }
        
        public virtual DateTime Day { get; set; }
    }
}
