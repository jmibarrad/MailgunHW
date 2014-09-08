using PrediLiga.Domain.Entities;

namespace PrediLiga.domain.Entities
{
    public class Team : IEntity
    {
        public virtual long Id { get; set; }
        public virtual bool IsArchived { get; set; }

        public virtual string Name { get; set; }

        public virtual int NumberOfPlayers { get; set; }

        public virtual string Coach { get; set; }
    }
}
