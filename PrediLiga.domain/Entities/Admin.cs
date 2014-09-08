using PrediLiga.Domain.Entities;

namespace PrediLiga.domain.Entities
{
    public class Admin : IEntity
    {
        public virtual long Id { get; set; }
        public virtual bool IsArchived { get; set; }

        public virtual string Password { get; set; }
    }
}
