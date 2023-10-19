using Application.Contracts.Features;
using DataAccess.Entities;
using Persistance;

namespace website_builder.Services
{
    public class UserImp : IUser
    {
        private readonly ApplicationDbContext _context;
        public UserImp(ApplicationDbContext context)
        {
            _context = context;
        }

        public User Add(User user)
        {
            _context.users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public void Delete(int userId)
        {
            User p = FindUserById(userId);
            if (p != null)
            {
                _context.users.Remove(p);
                _context.SaveChanges();
            }
        }

        public User FindUserById(int userId)
        {
            return _context.users.Where(p => p.UserID == userId).FirstOrDefault();
        }

        public IList<User> GetAllUsers()
        {
            return _context.users.ToList();
        }

        public User Update(User user)
        {
            User p = FindUserById(user.UserID);
            if (p != null)
            {
                p.Username = user.Username;
                _context.users.Update(p);
                _context.SaveChanges();
            }
            return p;
        }
    }
}
