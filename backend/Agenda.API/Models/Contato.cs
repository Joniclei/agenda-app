using System.ComponentModel.DataAnnotations;

namespace Agenda.API.Models;

public class Contato
{
    public int Id { get; set; }

    [Required]
    public string Nome { get; set; } = string.Empty;

    [Required]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Telefone { get; set; } = string.Empty;

    [Required]
    public string Endereco { get; set; } = string.Empty;

    [Required]
    public string Observacoes { get; set; } = string.Empty;

}
