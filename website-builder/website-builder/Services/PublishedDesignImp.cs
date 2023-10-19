using Application.Contracts.Features;
using DataAccess.Entities;
using Persistance;

namespace website_builder.Services
{
    public class PublishedDesignImp : IPublishedDesign
    {
        private readonly ApplicationDbContext _context;
        public PublishedDesignImp(ApplicationDbContext context)
        {
            _context = context;
        }

        public PublishedDesign Add(PublishedDesign publishedDesign)
        {
            _context.publisedDesigns.Add(publishedDesign);
            _context.SaveChanges();
            return publishedDesign;
        }

        public void Delete(int publishedDesignId)
        {
            PublishedDesign p = FindPublishedDesignById(publishedDesignId);
            if (p != null)
            {
                _context.publisedDesigns.Remove(p);
                _context.SaveChanges();
            }
        }

        public PublishedDesign FindPublishedDesignById(int publishedDesignId)
        {
            return _context.publisedDesigns.Where(p => p.PublishedDesignID == publishedDesignId).FirstOrDefault();
        }

        public IList<PublishedDesign> GetAllPublishedDesigns()
        {
            return _context.publisedDesigns.ToList();
        }

        public PublishedDesign Update(PublishedDesign publishedDesign)
        {
            PublishedDesign p = FindPublishedDesignById(publishedDesign.PublishedDesignID);
            if (p != null)
            {
                p.PublishDate = publishedDesign.PublishDate;
                _context.publisedDesigns.Update(p);
                _context.SaveChanges();
            }
            return p;
        }
    }
}
