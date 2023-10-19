using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Features
{
    public interface IProject
    {
        Project Add(Project project);
        Project Update(Project project);
        void Delete(int projectId);
        Project FindProjectById(int projectId);
        IList<Project> GetAllProjects();
    }
}
