using System.Collections;
using System.Collections.Generic;
using PrediLiga.Domain.Entities;

namespace PrediLiga.domain.Entities
{
    public class Account : IEntity
    {
        public virtual long Id { get; set; }
        public virtual bool IsArchived { get; set; }

        public virtual string Email { get; set; }

        public virtual string Name { get; set; }

        public virtual string Password { get; set; }

        public virtual IEnumerable<League> Leagues { get; set; }


        public virtual bool CheckPassword(string password)
        {
            return true;
        }

    }

}