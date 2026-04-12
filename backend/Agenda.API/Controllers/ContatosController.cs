using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Agenda.API.Data;
using Agenda.API.Models;

namespace Agenda.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContatosController : ControllerBase
{
    private readonly AppDbContext _context;

    public ContatosController(AppDbContext context)
    {
        _context = context;
    }
    [HttpPost]
    public async Task<ActionResult<Contato>> Create(Contato contato)
    {
        _context.Contatos.Add(contato);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = contato.Id }, contato);
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Contato>>> GetAll()
    {
        return await _context.Contatos.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Contato>> GetById(int id)
    {
        var contato = await _context.Contatos.FindAsync(id);
        if (contato == null) return NotFound();
        return contato;
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Contato contato)
    {
        var existe = await _context.Contatos.FindAsync(id);
        if (existe == null) return NotFound();

        existe.Nome = contato.Nome;
        existe.Email = contato.Email;
        existe.Telefone = contato.Telefone;
        existe.Endereco = contato.Endereco;
        existe.Observacoes = contato.Observacoes;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var contato = await _context.Contatos.FindAsync(id);
        if (contato == null) return NotFound();
        _context.Contatos.Remove(contato);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
