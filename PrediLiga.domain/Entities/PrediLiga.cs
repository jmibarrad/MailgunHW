using System.Collections;
using System.Collections.Generic;
using PrediLiga.Domain.Entities;

namespace PrediLiga.domain.Entities
{
    public class PrediLiga : IEntity
    {
        public virtual long Id { get; set; }
        public virtual bool IsArchived { get; set; }

        public virtual Admin _Admin { get; set; }

        public virtual IEnumerable<Account> Users { get; set; }

        public virtual IEnumerable<League> _Leagues { get; set; }
    }
}
