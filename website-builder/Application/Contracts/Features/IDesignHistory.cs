using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Features
{
    public interface IDesignHistory
    {
        DesignHistory Add(DesignHistory designHistory);
        DesignHistory Update(DesignHistory designHistory);
        void Delete(int designHistoryId);
        DesignHistory FindDesignHistoryById(int designHistoryId);
        IList<DesignHistory> GetAllDesignHistories();
    }
}
