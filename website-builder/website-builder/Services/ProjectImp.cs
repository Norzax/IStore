using Application.Contracts.Features;
using DataAccess.Entities;
using Persistance;

namespace website_builder.Services
{
    public class ProjectImp : IProject
    {
        private readonly ApplicationDbContext _context;
        public ProjectImp(ApplicationDbContext context)
        {
            _context = context;
        }

        public Project Add(Project project)
        {
            _context.projects.Add(project);
            _context.SaveChanges();
            return project;
        }

        public void Delete(int projectId)
        {
            Project p = FindProjectById(projectId);
            if (p != null)
            {
                _context.projects.Remove(p);
                _context.SaveChanges();
            }
        }

        public Project FindProjectById(int projectId)
        {
            return _context.projects.Where(p => p.ProjectId == projectId).FirstOrDefault();
        }

        public IList<Project> GetAllProjects()
        {
            return _context.projects.ToList();
        }

        public Project Update(Project project)
        {
            Project p = FindProjectById(project.ProjectId);
            if (p != null)
            {
                p.ProjectName = project.ProjectName;
                _context.projects.Update(p);
                _context.SaveChanges();
            }
            return p;
        }
    }
}
