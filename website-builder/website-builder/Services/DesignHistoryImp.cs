using Application.Contracts.Features;
using DataAccess.Entities;
using Persistance;

namespace website_builder.Services
{
    public class DesignHistoryImp : IDesignHistory
    {
        private readonly ApplicationDbContext _context;
        public DesignHistoryImp(ApplicationDbContext context)
        {
            _context = context;
        }

        public DesignHistory Add(DesignHistory designHistory)
        {
            _context.designHistories.Add(designHistory);
            _context.SaveChanges();
            return designHistory;
        }

        public void Delete(int designHistoryId)
        {
            DesignHistory p = FindDesignHistoryById(designHistoryId);
            if (p != null)
            {
                _context.designHistories.Remove(p);
                _context.SaveChanges();
            }
        }

        public DesignHistory FindDesignHistoryById(int designHistoryId)
        {
            return _context.designHistories.Where(p => p.DesignHistoryID == designHistoryId).FirstOrDefault();
        }

        public IList<DesignHistory> GetAllDesignHistories()
        {
            return _context.designHistories.ToList();
        }

        public DesignHistory Update(DesignHistory designHistory)
        {
            DesignHistory p = FindDesignHistoryById(designHistory.DesignHistoryID);
            if (p != null)
            {
                p.Version = designHistory.Version;
                _context.designHistories.Update(p);
                _context.SaveChanges();
            }
            return p;
        }
    }
}
