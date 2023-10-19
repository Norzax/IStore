using Application.Contracts.Features;
using DataAccess.Entities;
using Persistance;

namespace website_builder.Services
{
    public class AccessLevelImp : IAccessLevel
    {
        private readonly ApplicationDbContext _context;
        public AccessLevelImp(ApplicationDbContext context)
        {
            _context = context;
        }

        public AccessLevel Add(AccessLevel accessLevel)
        {
            _context.accessLevels.Add(accessLevel);
            _context.SaveChanges();
            return accessLevel;
        }

        public void Delete(int accessLevelId)
        {
            AccessLevel p = FindAccessLevelById(accessLevelId);
            if (p != null)
            {
                _context.accessLevels.Remove(p);
                _context.SaveChanges();
            }
        }

        public AccessLevel FindAccessLevelById(int accessLevelId)
        {
            return _context.accessLevels.Where(p => p.AccessLevelID == accessLevelId).FirstOrDefault();
        }

        public IList<AccessLevel> GetAllAccessLevels()
        {
            return _context.accessLevels.ToList();
        }

        public AccessLevel Update(AccessLevel accessLevel)
        {
            AccessLevel p = FindAccessLevelById(accessLevel.AccessLevelID);
            if (p != null)
            {
                p.Description = accessLevel.Description;
                _context.accessLevels.Update(p);
                _context.SaveChanges();
            }
            return p;
        }
    }
}
