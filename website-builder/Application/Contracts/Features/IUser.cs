using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Features
{
    public interface IUser
    {
        User Add(User user);
        User Update(User user);
        void Delete(int userId);
        User FindUserById(int userId);
        IList<User> GetAllUsers();
    }
}
