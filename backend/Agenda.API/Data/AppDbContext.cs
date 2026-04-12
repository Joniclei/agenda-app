using Microsoft.EntityFrameworkCore;
using Agenda.API.Models;

namespace Agenda.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Contato> Contatos { get; set; }
}
