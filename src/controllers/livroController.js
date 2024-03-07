import livros from "../models/Livro.js";
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livros.find({});
      res.status(200).json(listaLivros);
    } catch (err) {
      res.status(500).json({ message: `erro ao listar livros: ${err}` });
    }
  }

  static async cadastrarLivros(req, res) {
    const novoLivro = req.body;
    try {
      console.log(req.body);
      const autorEnc = await autor.findById(novoLivro.idAutor);
      console.log(autorEnc);
      const livroCompleto = { ...novoLivro, ...autorEnc._doc };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ messagem: "livro criado com sucesso.", livro: livroCriado });
    } catch (err) {
      res.status(500).json({ messagem: `erro ao criar novo livro: ${err}` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      console.log(req.body);
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado", livro: req.body });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - falha na atualizacao` });
    }
  }

  static async excluirLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({
        messagem: "livro excluido com sucesso.",
      });
    } catch (err) {
      res.status(500).json({ messagem: `erro ao excluir novo livro: ${err}` });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora });
      res.status(200).json(livrosPorEditora);
    } catch (err) {
      res
        .status(500)
        .json({ messagem: `erro ao pesquisar livro por editora: ${err}` });
    }
  }
}

export default LivroController;
