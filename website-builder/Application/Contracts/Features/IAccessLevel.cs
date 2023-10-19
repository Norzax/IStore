using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Features
{
    public interface IAccessLevel
    {
        AccessLevel Add(AccessLevel accessLevel);
        AccessLevel Update(AccessLevel accessLevel);
        void Delete(int accessLevelId);
        AccessLevel FindAccessLevelById(int accessLevelId);
        IList<AccessLevel> GetAllAccessLevels();
    }
}
