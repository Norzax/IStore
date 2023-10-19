using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Features
{
    public interface IUserProjectAccess
    {
        UserProjectAccess Add(UserProjectAccess userProjectAccess);
        UserProjectAccess Update(UserProjectAccess userProjectAccess);
        void Delete(int userProjectAccessId);
        UserProjectAccess FindUserProjectAccessById(int userProjectAccessId);
        IList<UserProjectAccess> GetAllUserProjectAccesses();
    }
}
