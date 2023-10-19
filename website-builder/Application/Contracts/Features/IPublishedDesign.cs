using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Features
{
    public interface IPublishedDesign
    {
        PublishedDesign Add(PublishedDesign publishedDesign);
        PublishedDesign Update(PublishedDesign publishedDesign);
        void Delete(int publishedDesignId);
        PublishedDesign FindPublishedDesignById(int publishedDesignId);
        IList<PublishedDesign> GetAllPublishedDesigns();
    }
}
