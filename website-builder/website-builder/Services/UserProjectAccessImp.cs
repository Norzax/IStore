using Application.Contracts.Features;
using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace website_builder.Services
{
    public class UserProjectAccessImp : IUserProjectAccess
    {
        private readonly ApplicationDbContext _context;
        public UserProjectAccessImp(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserProjectAccess Add(UserProjectAccess userProjectAccess)
        {
            _context.userProjectAccesses.Add(userProjectAccess);
            _context.SaveChanges();
            return userProjectAccess;
        }

        public void Delete(int userProjectAccessId)
        {
            UserProjectAccess p = FindUserProjectAccessById(userProjectAccessId);
            if (p != null)
            {
                _context.userProjectAccesses.Remove(p);
                _context.SaveChanges();
            }
        }

        public UserProjectAccess FindUserProjectAccessById(int userProjectAccessId)
        {
            return _context.userProjectAccesses.Where(p => p.UserProjectAccessID == userProjectAccessId).FirstOrDefault();
        }

        public IList<UserProjectAccess> GetAllUserProjectAccesses()
        {
            return _context.userProjectAccesses.ToList();
        }

        public UserProjectAccess Update(UserProjectAccess userProjectAccess)
        {
            UserProjectAccess p = FindUserProjectAccessById(userProjectAccess.UserProjectAccessID);
            if (p != null)
            {
                p.AccessLevelID = userProjectAccess.AccessLevelID;
                _context.userProjectAccesses.Update(p);
                _context.SaveChanges();
            }
            return p;
        }
    }
}
